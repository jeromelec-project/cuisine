
// Ajouter    / modifier / supprimer des recettes
// Catégoriser    par type (entrée, plat, dessert)

// Filtrer    par catégorie ou ingrédients

// Sauvegarde    en LocalStorage
// Recettes    favorites




const inputRecetteNom = document.getElementById("inputRecetteNom");
const inputRecetteIngredients = document.getElementById("inputRecetteIngredients");
const selectTypeRecette = document.getElementById("selectTypeRecette");
const formRecette = document.querySelector(".formRecette");
const tableRecettes = document.querySelector(".tableRecettes");



const recettes = [];


function afficherRecettesTr() {
let tr = "<tr><td>lol</td><td>lol2</td><td></td><td></td><td>lol12000</td></tr>";
localStorage.setItem("ContenuTableauRecettes", tr);
}


function tableauRecettes() {
    afficherRecettesTr();
    const tr = localStorage.getItem("ContenuTableauRecettes");
    console.log(tr);

const tableaulocal = tableRecettes.innerHtml = `<table>
    <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Ingrédients</th>
        <th>type</th>
        <th>Actions</th>
    </tr>
${tr}
</table>`;
     return tableaulocal;   
}


if (formRecette) {
    

formRecette.addEventListener("submit", (event) => {
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
    console.log(recettes);
    localStorage.setItem("recettes", JSON.stringify(recettes));

    tableauRecettes();
});


}