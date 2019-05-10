# Exercice Code BZH

Les modifications se font dans `js/global.js`.

## 2) Visualisation Article dans la liste de courses

- Complétez la fonction `readShoppingListItem()` qui permet d'afficher les articles.
    - Effacez la liste affichée.
    - Pour chaque articles de la liste en mémoire (`shoppingListCollection`), ajoutez les à la liste affichée avec la fonction `addShopingListItem(votreArticleIci)`.
    - Récupérez l'emplacement dans le document de tous les <li> de classe `.shoppingItem` (Articles affichés).
    - Rajoutez dans la fonction `readShoppingListItem()` pour chaque article de la liste, un évènement qui se déclenche quand on clique dessus. On gardera l'article en mémoire comme celui selectionné et on changera l'état de l'article affiché avec : 
        - Etat désactivé : `itemSelected.setAttribute("class","shoppingItem list-group-item input-group");`
        - Etat activé : `itemSelected.setAttribute("class","shoppingItem list-group-item input-group active");` 
        - Et on stockera l'article sélectionné dans `itemSelected` pour désactiver la selection quand on clique sur un article déjà sélectionné.
        - Rajoutez la déselection d'un article s'il est déjà sélectionné.
        - Faites en sorte que quand on sélectionne un article, la valeur affichée du bouton `addItemSubmitButton` passe de "Créer" à "Modifier" et inversement. 
- Appellez la fonction `readShoppingListItem()` pour afficher les articles lors du chargement de la page.