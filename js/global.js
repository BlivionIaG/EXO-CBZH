
let shoppingListCollection = JSON.parse(localStorage.getItem("shoppingList")) || [] // On recupère la liste sauvegardée dans le stockage ou on crée une liste vide par défaut
let addItemToShoppingListForm = document.querySelector("#addItemToShoppingList");   // Emplacement du formaulaire d'entrée de la liste de courses
let shoppingItemName = document.querySelector("#shoppingItemName");                 // Emplacement du champ de saisie du nom de l'article
let shoppingList = document.querySelector("#shoppingList");                         // Emplacement de la liste de course affichée
let deleteShoppingListItemButton = document.querySelector("#deleteItemButton");     // Emplacement du bouton de suppression

let itemSelected = null;                                                            // Article actuellement selectionné (null = pas d'article)

readShoppingListItem(); // On affiche la liste des articles chargé en mémoire

addItemToShoppingListForm.addEventListener("submit", (event) => {       // Quand on valide la saisie d'un nom d'article
    if(itemSelected){               // Si un article est sélectionné
        updateShoppingListItem();   // On le met à jour
    }else{                          // Sinon
        createShoppingListItem();   // On l'ajoute
    }
});

deleteShoppingListItemButton.addEventListener("click", (event) =>{                   // Quand on clique sur la corbeille
    if(itemSelected){                                                                // Si un article est sélectionné
        if(confirm("Do you want to delete the item "+itemSelected.innerHTML+" ?")){  // On demande la confirmation de la suppression de l'article
            deleteShoppingListItem();                                                // Appel de la fonction de suppression
        }
    }
});

function indexOfItemById(array, id){                        // On récupère la position dans un tableau d'un article avec un identifiant donné
    let i = -1; // Par défaut on est en dehors du tableau
    for (let index = 0; index < array.length; index++) {    // On parcours le tableau donné                         
        if(array[index].id == id){                          // Si l'identifiant de l'article parcouru est le même que l'identifiant donné
            i = index;                                      // On stocke dans i la position de l'article correspondant
        }
    }

    return i;   // On retourne l'identifiant trouvé
}

function searchForHighestIndex(array){      // On cherche dans le tableau l'élément qui as l'identifiant le plus grand
    let id = -1;                            // Par défaut on est en dehors du tableau

    array.forEach(element => {              // On parcours le tableau pour chaque élément
        if(element.id > id){                // Si l'identifiant de l'élément parcouru est plus grand que celui stocké dans id
            id = element.id;                // On le stocke dans id
        }
    });

    return id;  // On retourne la valeur de l'identifiant le plus grand 
}

function addShopingListItem(item){     // Ajoute à la liste non ordonnée (<ul>) shoppingList un article
    /*  Suite à un problème dont je n'ai pas encore la solution, Je ne pouvais pas sélectionner une ligne sur deux.
        Dans le cas d'un nombre d'article pair, les articles sélectionnables étaient ceux à des positions paires et
        inversement dans le cas d'un nombre d'articles impair, pour résoudre ce problème rapidement :*/
    shoppingList.innerHTML += "<li style=\"list-style-type:none\" type=\"hidden\"></li>";  // J'ai ajouté un balise <li> de type "hidden" (caché) avant celle de l'article affiché
    /* Ce n'est pas une solution très propre mais elle marche, je vais essayer de trouver mieux */ 

    let liElement = document.createElement("li");                                   // On crée une balise <li>
    liElement.setAttribute("class", "shoppingItem list-group-item input-group");    // On lui des attributs de classe 
    liElement.setAttribute("id", "shoppingItem_"+item.id);                          // On lui ajoute un identifiant

    liElement.innerHTML = item.name;                                                // On rajoute le nom de l'article dans la balise <li>

    shoppingList.appendChild(liElement);                                            // On rajoute la balise <li> dans la liste non ordonnée (<ul>) shoppingList
}

function createShoppingListItem(){
    let item = {
        id: searchForHighestIndex(shoppingListCollection)+1,    // id of the item
        name: shoppingItemName.value                            // name of the item
    };

    if(item.name !== ""){                       // If the input fiel isn't empty
        addShopingListItem(item);               // Add the item to the displayed list
        shoppingListCollection.push(item);      // Add the item to the memory stored list
        localStorage.setItem(                   // Replace the list by the one stored in memory
            "shoppingList", 
            JSON.stringify(shoppingListCollection)
        );
    }
}

function readShoppingListItem(){
    shoppingList.innerHTML = "";    // Clear the displayed list

    shoppingListCollection.forEach(element => {     // For each item in the list
        addShopingListItem(element);                // We add it into the displayed list

        let displayedShoppingList = document.querySelectorAll(".shoppingItem"); // Then we find the location of every displayed item
        displayedShoppingList.forEach(element => {                              // And for each of them
            element.addEventListener("click",                                   // We add an mouse click event listener for them
                (event) => {
                    if(element === itemSelected){                       // If the item is already selected
                        shoppingItemName.value = "";                    // We clear the input
                        itemSelected.setAttribute("class",              // Unselect the displayed item
                            "shoppingItem list-group-item input-group"
                        );

		                let formContainer = itemSelected.parentNode.parentNode.parentNode;			// Récupération du parent commun à l'élément sélectionné et au bouton à modifier
		                let formElement = formContainer.querySelector("#addItemToShoppingList");	// Récupération du formulaire
		                let formButton = formElement.querySelector('input[type="submit"]');			// Récupération du bouton

		                formButton.setAttribute("value", "Créer");								// Modification de la valeur du bouton

                        itemSelected = null;                      
                    }else{                   
                        shoppingItemName.value=element.innerHTML;           // Copy the name of the item in the input
                        if(itemSelected) {                                  
                            itemSelected.setAttribute("class",              // Unselect the displayed item
                                "shoppingItem list-group-item input-group"
                            );
                        }
                        itemSelected = element;                                 // Set current item as selected
                        itemSelected.setAttribute("class",                      // Display the item as selected
                            "shoppingItem list-group-item input-group active"
                        );

		                let formContainer = itemSelected.parentNode.parentNode.parentNode;			// Récupération du parent commun à l'élément sélectionné et au bouton à modifier
		                let formElement = formContainer.querySelector("#addItemToShoppingList");	// Récupération du formulaire
		                let formButton = formElement.querySelector('input[type="submit"]');			// Récupération du bouton

		                formButton.setAttribute("value", "Modifier");								// Modification de la valeur du bouton
                    }
                }
            );
        });
        
    });
}

function updateShoppingListItem(){
    let item = {
        id: itemSelected.id.split("_")[1],          // The get the number part of the id (shoppingItem_XX)
        name: shoppingItemName.value                
    };

    if(item.name !== ""){                           // If the input fiel isn't empty
        shoppingListCollection[indexOfItemById(     // Add the item to the memory stored list
            shoppingListCollection, item.id
        )] = item;     
        readShoppingListItem();                     // Refresh the displayed list
        localStorage.setItem(                       // Replace the list by the one stored in memory
            "shoppingList", 
            JSON.stringify(shoppingListCollection)
        );
    }
}

function deleteShoppingListItem(){
    let itemId = itemSelected.id.split("_")[1];

    shoppingListCollection.splice(
        indexOfItemById(shoppingListCollection, itemId), 1
    );
    
    itemSelected = null;

    readShoppingListItem();
    localStorage.setItem(                       // Replace the list by the one stored in memory
        "shoppingList", 
        JSON.stringify(shoppingListCollection)
    );
}
