let addItemToShoppingListForm = document.querySelector("#addItemToShoppingList");
let itemSelected = false;

addItemToShoppingListForm.addEventListener("submit", (event) => {
    if(itemSelected){
        updateShoppingListItem();
    }else{
        createShoppingListItem();
    }
})

function createShoppingListItem(){
    alert("Create !");
}

function updateShoppingListItem(){
    alert("Update !");
}

function deleteShoppingListItem(){

}