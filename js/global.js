
let shoppingListCollection = JSON.parse(localStorage.getItem("shoppingList")) || [] // Fetches the saved list or creates an empty array by default

let addItemToShoppingListForm = document.querySelector("#addItemToShoppingList");   // Shopping item input form location
let shoppingItemName = document.querySelector("#shoppingItemName");                 // Item name location
let shoppingList = document.querySelector("#shoppingList");                          // Shopping list location

let itemSelected = null;

readShoppingListItem();

addItemToShoppingListForm.addEventListener("submit", (event) => {
    if(itemSelected){               // If an item is selected
        updateShoppingListItem();   // We update it
    }else{
        createShoppingListItem();   // We add it
    }
});

function addShopingListItem(item){
    let liElement = document.createElement("li");
    liElement.setAttribute("class", "shoppingItem list-group-item input-group");
    liElement.setAttribute("id", "shoppingItem_"+item.id);

    liElement.innerHTML = item.name;

    shoppingList.appendChild(liElement);
}

function createShoppingListItem(){
    let item = {
        id: shoppingListCollection.length,
        name: shoppingItemName.value
    };

    if(item.name !== ""){                            // If the input fiel isn't empty
        addShopingListItem(item);               // Add the item to the displayed list
        shoppingListCollection.push(item);      // Add the item to the memory stored list
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

        let displayedShoppingList = document.querySelectorAll(".shoppingItem");
        displayedShoppingList.forEach(element => {
            element.addEventListener("click",
                (event) => {
                    if(element === itemSelected){
                        shoppingItemName.value = "";
                        itemSelected.setAttribute("class", "shoppingItem list-group-item input-group");
                        itemSelected = null;
                    }else{
                        shoppingItemName.value=element.innerHTML;
                        if(itemSelected) {
                            itemSelected.setAttribute("class", "shoppingItem list-group-item input-group");
                        }
                        itemSelected = element;
                        itemSelected.setAttribute("class", "shoppingItem list-group-item input-group active");
                    }                    
                }
            );
        });
        
    });
}

function updateShoppingListItem(){
    let item = {
        id: itemSelected.id.split("_")[1],
        name: shoppingItemName.value
    };

    if(item.name !== ""){                            // If the input fiel isn't empty
        shoppingListCollection[item.id] = item;  // Add the item to the memory stored list
        readShoppingListItem();                     // Refresh the displayed list
        localStorage.setItem(                       // Replace the list by the one stored in memory
            "shoppingList", 
            JSON.stringify(shoppingListCollection)
        );
    }
}

function deleteShoppingListItem(){

}