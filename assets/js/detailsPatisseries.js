var modal = document.getElementsByClassName("modal")[0];
var span = document.getElementsByClassName("close")[0];
var container = document.getElementsByClassName("container")[0];

var image = document.getElementById("imageDetails");
var titre = document.getElementById("titreDetails");
var ingredients = document.getElementById("ingredientsDetails");
var prix = document.getElementById("prixDetails");

var containerArray = Array.from(container.getElementsByClassName("showBtn"));

var gateau = [
  {image: "../assets/img/patisserie1.jpg",titre: "Paris-Brest", ingredients: "Beurre, Oeufs, Sucre, Lait", prix: "2€"},
  {image: "../assets/img/patisserie2.jpeg",titre: "Mille-feuille", ingredients: "Pâte feuilletée, Farine, Oeuf, Lait, Sucre", prix: "2€"},
  {image: "../assets/img/patisserie3.jpg",titre: "Éclair au chocolat", ingredients: "Chocolat, Farine, Lait, Beurre, Oeufs, Sucre", prix: "2€"},
  {image: "../assets/img/patisserie4.jpeg",titre: "Éclair au café", ingredients: "Café, Farine, Lait, Beurre, Oeufs, Sucre", prix: "2€"},
  {image: "../assets/img/patisserie5.jpg",titre: "Opéra", ingredients: "Oeufs, Sucre, Poudre d'amandes, Beurre, Farine, Chocolat, Café", prix: "2€"},
  {image: "../assets/img/patisserie6.jpeg",titre: "Tartelette aux fraises", ingredients: "Pâte sablée, Fraises, Oeufs, Beurre, Sucre, Gêlée de fruits rouges", prix: "2€"},
  {image: "../assets/img/patisserie7.jpg",titre: "Tartelette au citron meringuée", ingredients: "Pâte sablée, Sucre, Beurre, Oeufs, Citron", prix: "2€"},
  {image: "../assets/img/patisserie8.jpeg",titre: "Macarons", ingredients: "Colorant alimentaire, Amandes en poudre, Oeufs, Sucre", prix: "2€"},
  {image: "../assets/img/patisserie9.png",titre: "Tiramisu", ingredients: "Oeufs, Sucre roux, Sucre vanillé, Mascarpone, Café noir, Cacao", prix: "2€"},
  {image: "../assets/img/patisserie10.jpg",titre: "Tartelette aux framboises", ingredients: "Pâte sablée, Framboises, Oeufs, Beurre, Sucre", prix: "2€"}
];

function closeInfo() {
  modal.style.display = "none";
}

span.onclick = closeInfo;

containerArray.forEach((element,id) => {
  element.onclick = function() {
    modal.style.display = "block";
    image.src = gateau[id].image;
    titre.innerHTML = gateau[id].titre;
    ingredients.innerHTML = gateau[id].ingredients;
    prix.innerHTML = gateau[id].prix;
  }
});

/*window.onclik = function(event) {
  if (event.target != modal) {
    modal.style.display = "none";
  }
}*/