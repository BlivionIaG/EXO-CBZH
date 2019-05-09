let shoppingListCollection = JSON.parse(localStorage.getItem("shoppingList")) || [] // On recupère la liste sauvegardée dans le stockage ou on crée une liste vide par défaut
let addItemToShoppingListForm = document.querySelector("#addItemToShoppingList");   // Emplacement du formaulaire d'entrée de la liste de courses
let shoppingItemName = document.querySelector("#shoppingItemName");                 // Emplacement du champ de saisie du nom de l'article
let shoppingList = document.querySelector("#shoppingList");                         // Emplacement de la liste de course affichée
let deleteShoppingListItemButton = document.querySelector("#deleteItemButton");     // Emplacement du bouton de suppression

let itemSelected = null;                                                            // Article actuellement selectionné (null = pas d'article)

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
    
}

function readShoppingListItem(){
    
}

function updateShoppingListItem(){
    
}

function deleteShoppingListItem(){
    
}
