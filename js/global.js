
let shoppingListCollection = JSON.parse(localStorage.getItem("shoppingList")) || [] // Fetches the saved list or creates an empty array by default

let addItemToShoppingListForm = document.querySelector("#addItemToShoppingList");   // Shopping item input form location
let shoppingItemName = document.querySelector("#shoppingItemName");                 // Item name location
let shoppingList = document.querySelector("#shoppingList");                          // Shopping list location

let itemSelected = false;

readShoppingListItem();

addItemToShoppingListForm.addEventListener("submit", (event) => {
    if(itemSelected){               // If an item is selected
        updateShoppingListItem();   // We update it
    }else{
        createShoppingListItem();   // We add it
    }
});

function addShopingListItem(name){
    let liElement = document.createElement("li");
    liElement.setAttribute("class", "list-group-item input-group");

    liElement.innerHTML = name;

    shoppingList.appendChild(liElement);
}

function createShoppingListItem(){
    let itemName = shoppingItemName.value;

    if(itemName !== ""){                            // If the input fiel isn't empty
        addShopingListItem(itemName);               // Add the item to the displayed list
        shoppingListCollection.push(itemName);      // Add the item to the memory stored list
        localStorage.setItem(                       // Replace the list by the one stored in memory
            "shoppingList", 
            JSON.stringify(shoppingListCollection)
        );
    }
}

function readShoppingListItem(){
    shoppingList.innerHTML = "";

    shoppingListCollection.forEach(element => {
        addShopingListItem(element);
    });
}

function updateShoppingListItem(){
    alert("Update !");
}

function deleteShoppingListItem(){

}