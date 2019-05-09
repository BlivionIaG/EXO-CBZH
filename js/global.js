
let shoppingListCollection = JSON.parse(localStorage.getItem("shoppingList")) || [] // Fetches the saved list or creates an empty array by default

let addItemToShoppingListForm = document.querySelector("#addItemToShoppingList");   // Shopping item input form location
let shoppingItemName = document.querySelector("#shoppingItemName");                 // Item name location
let shoppingList = document.querySelector("#shoppingList");                         // Shopping list location
let deleteShoppingListItemButton = document.querySelector("#deleteItemButton");     // Delete shopping list item button location

let itemSelected = null;                                                            // Current selected item

function indexOfItemById(array, id){
    let i = -1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.id == id){
            i = index;
        }
    }

    return i;
}

function searchForHighestIndex(array){
    let id = -1;

    array.forEach(element => {
        if(element.id > id){
            id = element.id;
        }
    });

    return id;
}

function addShopingListItem(item){
    shoppingList.innerHTML += "<li style=\"list-style-type:none\" type=\"hidden\"></li>";

    let liElement = document.createElement("li");                                   // Creates a <li> tag
    liElement.setAttribute("class", "shoppingItem list-group-item input-group");    // Adds class attributes
    liElement.setAttribute("id", "shoppingItem_"+item.id);                          // Adds id attributes

    liElement.innerHTML = item.name;                                                // Adds the item name inside the <li> tag

    shoppingList.appendChild(liElement);                                            // Adds the li tag inside the shoppingList
}

function createShoppingListItem(){

}

function readShoppingListItem(){

}

function updateShoppingListItem(){

}

function deleteShoppingListItem(){

}