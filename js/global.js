
let shoppingListCollection = JSON.parse(localStorage.getItem("shoppingList")) || [] // Fetches the saved list or creates an empty array by default

let addItemToShoppingListForm = document.querySelector("#addItemToShoppingList");   // Shopping item input form location
let shoppingItemName = document.querySelector("#shoppingItemName");                 // Item name location
let shoppingList = document.querySelector("#shoppingList");                         // Shopping list location
let deleteShoppingListItemButton = document.querySelector("#deleteItemButton");     // Delete shopping list item button location

let itemSelected = null;                                                            // Current selected item

readShoppingListItem();

addItemToShoppingListForm.addEventListener("submit", (event) => {
    if(itemSelected){               // If an item is selected
        
    }else{
        createShoppingListItem();   // We add it
    }
});

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
                    }                    
                }
            );
        });
        
    });
}

function updateShoppingListItem(){
    
}

function deleteShoppingListItem(){

}
