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
