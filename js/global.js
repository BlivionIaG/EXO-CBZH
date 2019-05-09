
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
        id: searchForHighestIndex(shoppingListCollection)+1,    // Identifiant de l'article
        name: shoppingItemName.value                            // Nom de l'article
    }
    
    if(item.name !== ""){                       // Si le champ de saisie du nom de l'article n'est pas vide
        addShopingListItem(item);               // On rajoute l'article à la liste affichée
        shoppingListCollection.push(item);      // On rajoute l'article à la liste sauvegardée en mémoire
        localStorage.setItem(                   // On remplace la liste sauvegardée dans le stockage par celle en mémoire
            "shoppingList",  // Nom (Clé) de la liste en stockage
            JSON.stringify(shoppingListCollection) // On converti en chaine de charactères au format JSON la liste
        );
    }
}

function readShoppingListItem(){
    shoppingList.innerHTML = "";    // On efface la liste affichée 

    shoppingListCollection.forEach(element => {     // On parcours la liste en mémoire pour chaque article
        addShopingListItem(element);                // On l'ajoute à la liste affichée 

        let displayedShoppingList = document.querySelectorAll(".shoppingItem"); // On cherche l'emplacement dans le document affiché de chaque article
        displayedShoppingList.forEach(element => {                              // Et pour chaque article
            element.addEventListener("click",                                   // On met un évènement qui se lance quand on clique dessus
                (event) => {
                    if(element === itemSelected){                       // Si l'article est déjà sélectionné
                        shoppingItemName.value = "";                    // On efface le champ de saisie
                        itemSelected.setAttribute("class",              // On déselectionne en mémoire l'article
                            "shoppingItem list-group-item input-group"
                        );

		                document.querySelector("#addItemSubmitButton").setAttribute("value", "Créer");	// Modification de la valeur du bouton

                        itemSelected = null;                      
                    }else{                   
                        shoppingItemName.value=element.innerHTML;           // On copie le nom de l'article dans le champ de saisie vers le nom de l'élément sélectionné
                        if(itemSelected) {                                  
                            itemSelected.setAttribute("class",              // On désélectionne (affichage) l'élément séléctionné
                                "shoppingItem list-group-item input-group"  // On enlève l'attribut "active" de bootstrap
                            );
                        }
                        itemSelected = element;                                 // On met l'article sur lequel on a cliqué comme celui actuellement sélectionné
                        itemSelected.setAttribute("class",                      // On affiche l'article sur lequel on a cliqué comme sélectionné
                            "shoppingItem list-group-item input-group active"   // On utilise l'attribut "active de bootstrap"
                        );

                        document.querySelector("#addItemSubmitButton")..setAttribute("value", "Modifier");  // Modification de la valeur du bouton
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
