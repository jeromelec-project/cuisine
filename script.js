
// Ajouter    / modifier / supprimer des recettes
// Catégoriser    par type (entrée, plat, dessert)

// Filtrer    par catégorie ou ingrédients

// Sauvegarde    en LocalStorage
// Recettes    favorites




const inputRecetteNom = document.getElementById("inputRecetteNom");
const inputRecetteIngredients = document.getElementById("inputRecetteIngredients");
const selectTypeRecette = document.getElementById("selectTypeRecette");
const FormRecette = document.getElementById("FormRecette");
const tableRecettes = document.getElementById("tableRecettes");


function removeRecette(recetteId) {
    recettes = recettes.filter((recette) => recette.id !== recetteId);
    localStorage.setItem("recettes", JSON.stringify(recettes));
    tableauRecettes();
}




//console.log(FormRecette);
if(!localStorage.getItem("recettes")) {
    var recettes = [];
}else{
    var recettes = JSON.parse(localStorage.getItem("recettes"));
}

function afficherRecettesTr() {
console.log("recetes:",recettes);

let tr = recettes.map((recette) => {
    return `<tr>
    <td>${recette.id}</td>
    <td>${recette.nom}</td>
    <td>${recette.ingredients}</td>
    <td>${recette.type}</td>
    <td><button type="submit" name="recetteModifier" onclick="modifierRecette(${recette.id})" value="${recette.id}">Modifier</button>
    <button type="submit" name="recetteSupprimer" onclick="removeRecette(${recette.id})" value="${recette.id}">Supprimer</button>
    <button type="submit" name="recetteAjouter" onclick="favoritesRecettes(${recette.id})" value="${recette.id}">Ajouter aux favoris</button></td>
    </tr>`
})
const trjoin = tr.join(" ");
localStorage.setItem("ContenuTableauRecettes", trjoin);
}


function tableauRecettes() {
    afficherRecettesTr();
    const tr = localStorage.getItem("ContenuTableauRecettes");
    //console.log(tr);

    const tableauLocal = tableRecettes.innerHTML = `<table class="tableauRecettes">
    <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Ingrédients</th>
        <th>type</th>
        <th>Actions</th>
    </tr>
    ${tr}
    </table>`;
     //console.log(tableauLocal); 

    return tableauLocal;  
}

    tableauRecettes();




FormRecette.addEventListener("submit", (event) => {
    event.preventDefault();
    const recette = {
        nom: inputRecetteNom.value,
        ingredients: inputRecetteIngredients.value,
        type: selectTypeRecette.value
    };
    recettes.push({
        ...recette,
        id: recettes.length + 1,
    });
    console.log("recettes:",recettes);
    localStorage.setItem("recettes", JSON.stringify(recettes));

    tableauRecettes();

});


