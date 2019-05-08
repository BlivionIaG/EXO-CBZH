
let shoppingListCollection = JSON.parse(localStorage.getItem("shoppingList")) || [] // Fetches the saved list or creates an empty array by default

let addItemToShoppingListForm = document.querySelector("#addItemToShoppingList");   // Shopping item input form location
let shoppingItemName = document.querySelector("#shoppingItemName");                 // Item name location
let itemSelected = false;

addItemToShoppingListForm.addEventListener("submit", (event) => {
    if(itemSelected){
        updateShoppingListItem();
    }else{
        createShoppingListItem();
    }
})

function createShoppingListItem(){
    let itemName = shoppingItemName.value;

    if(itemName !== ""){ // If the input fiel isn't empty
        addShopingListItem(itemName);
    }
}

function updateShoppingListItem(){
    alert("Update !");
}

function deleteShoppingListItem(){

}