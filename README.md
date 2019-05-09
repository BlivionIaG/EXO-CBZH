# Exercice Code BZH

Les modifications se font dans `js/global.js`.

## 2) Visualisation Article dans la liste de courses

- Complétez la fonction `readShoppingListItem()` qui permet d'afficher les articles.
- Appellez la fonction `readShoppingListItem()` pour afficher les articles lors du chargement de la page.
- Rajoutez dans la fonction `readShoppingListItem()` pour chaque article de la liste, un évènement qui se déclenche quand on clique dessus. On gardera l'article en mémoire comme celui selectionné et on changera l'état de l'article affiché avec : 
    - Etat désactivé : `itemSelected.setAttribute("class","shoppingItem list-group-item input-group");`
    - Etat activé : `itemSelected.setAttribute("class","shoppingItem list-group-item input-group active");`