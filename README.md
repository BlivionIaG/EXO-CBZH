# Exercice Code BZH

Les modifications se font dans `js/global.js`.

## 1) Ajout d'un article dans la liste de courses

- Ajoutez un évènement qui se déclenche lorsque que l'on valide le nom de l'article.
  - Il vérifiera si le champ de saisie est rempli
  - Puis appellera la fonction `createShoppingListItem()`.
  
- Complétez la fonction `createShoppingListItem()` qui permet d'ajouter un article à la liste de courses.
  - Elle doit créer un article avec un identifiant `id` et un nom `name`, \
    ex : `let article = { id: 420, name: "Guide du voyageur galactique" };`. \
    Attention, l'identifiant doit être unique, vous avez la fonction `searchForHighestIndex(mettreListeIci)` \
    qui vous permer de trouver l'identifiant le plus grand de la liste.
  - Ajoutez cette article à la liste enregistrée en mémoire `shoppingListCollection` ( c'est un tableau ).
  - Puis enregistrez dans le stockage local votre liste enregistrée en mémoire (`shoppingListCollection`).
  - Et pour finir vous pouvez ajouté à la liste affichée votre nouvel article grâce à la fonction `addShopingListItem(votreArticleIci)` (oui j'ai oublié un p dans le nom).

## 2) Visualisation Article dans la liste de courses

- Complétez la fonction `readShoppingListItem()` qui permet d'afficher les articles.
- Appellez la fonction `readShoppingListItem()` pour afficher les articles lors du chargement de la page.
- Rajoutez dans la fonction `readShoppingListItem()` pour chaque article de la liste, un évènement qui se déclenche quand on clique dessus. On gardera l'article en mémoire comme celui selectionné et on changera l'état de l'article affiché avec : 
    - Etat désactivé : `itemSelected.setAttribute("class","shoppingItem list-group-item input-group");`
    - Etat activé : `itemSelected.setAttribute("class","shoppingItem list-group-item input-group active");`

## 3) Modification Article dans la liste de courses

- Complétez la fonction `updateShoppingListItem()` pour modifier un article de la liste de course.
- Modifiez l'évènement qui se déclenche lorsque l'on valide la saisie d'un article pour executer la fonction `updateShoppingListItem()` quand on veut modifier un article.

## 4) Suppression Article dans la liste de courses

- Complétez la fonction `deleteShoppingListItem()` qui permet de supprimer un élément sélectionné de la liste.
- Ajoutez un évènement qui se déclenche au clique sur le bouton supprimer et qui execute la fonction `deleteShoppingListItem()`.
