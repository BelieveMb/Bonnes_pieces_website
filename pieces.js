// Récupération des pièces depuis le fichier JSON
const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());
 
// Fonction qui génère toute la page web
function genererPieces(pieces) {
  for (let i = 0; i < pieces.length; i++) {
       // Création d’une balise dédiée à une pièce auto
       const pieceElement = document.createElement("article");
       // On crée l’élément img.
       const imageElement = document.createElement("img");
       // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
       imageElement.src = pieces[i].image;
       // On rattache l’image à pieceElement (la balise article)
       pieceElement.appendChild(imageElement);
       // Idem pour le nom, le prix et la catégorie ...
       // ...    
       // On rattache la balise article au body
       document.body.appendChild(pieceElement);
  }
 
}
 
// Premier affichage de la page
genererPieces(pieces);
 
// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
   const piecesOrdonnees = Array.from(pieces)
   piecesOrdonnees.sort(function (a, b) {
       return b.prix - a.prix;
   });
  // Effacement de l'écran et regénération de la page
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees);
});
 
// Ajout du listener pour filtrer les pièces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.disponibilite;
   });
   // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});

/*récuperation de données depuis le fichier JSON
const reponse =  await fetch('pieces-autos.json');
const pieces =  await reponse.json();
//la boucle for
for (let i = 0; i < pieces.length; i++) {
    //création des balises sur le DOM
    const article = pieces[i];
    const articleElement = document.createElement("article");
    const imageElement = document.createElement("img");
    //with document.createElement('img') we can create a balise img
    // imageElement.src = article.image;
    imageElement.src = pieces[i].image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement =  document.createElement("p");
    //prixElement.innerText = `Prix : ${article.prix} £`;
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    //operateur nullish ?? pour afficher "(aucune catégorie)" si categorie est null ou undefined
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment";
    //variable stock
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
    //affiche des balises via le parent
    const sectionFiches = document.querySelector('.fiches');
    sectionFiches.appendChild(articleElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(nomElement);
    articleElement.appendChild(prixElement);
    articleElement.appendChild(categorieElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(stockElement);
}

//le trie
const boutonTrier =  document.querySelector('.btn-trier');
boutonTrier.addEventListener("click", function(){
    //Puis il nous faut réordonner les éléments de la liste en fonction de leur
    //prix. Pour cela, nous utilisons la fonction sort qui prend en argument…
    //une nouvelle fonction anonyme
    const piecesOrdonnees = Array.from(pieces); //on copie les pieces dans cette var
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
     console.log(piecesOrdonnees);
});

//le filtrage
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    // la fonction filter. Elle prend en argument une fonction anonyme qui sera
    // appelée une fois par élément de la liste. La fonction anonyme prend un
    // paramètre : l’élément à tester, qui se trouvera ou non dans la liste filtrée.
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
});
//affiche les articles qui ont une description
const btnDescription = document.querySelector('.btn-description');
btnDescription.addEventListener('click', function() {
    const descriptionFilt = pieces.filter(function(piece) {
        return piece.description
    });
});
//trier en ordre decroissant
const btnDecrois =  document.querySelector('.btn-detrier');
btnDecrois.addEventListener("click", function(){
    //Puis il nous faut réordonner les éléments de la liste en fonction de leur
    //prix. Pour cela, nous utilisons la fonction sort qui prend en argument…
    //une nouvelle fonction anonyme
    const piecesOrdonnees = Array.from(pieces); //on copie les pieces dans cette var
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
     console.log(piecesOrdonnees);
});

//parcourir le tableau et supprimer
const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}
console.log(noms);
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = noms[i];
   abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
.appendChild(abordablesElements);

//code
const nomsDispo = pieces.map(piece => piece.nom);
const prix = pieces.map(piece => piece.prix);
for(let i = pieces.length -1; i >= 0; i--){
    // if ("disponibilite"== true) {
    if (pieces[i].disponibilite === false) {
        nomsDispo.splice(i,1);
        prix.splice(i,1);
    }
}
//create liste
const disponibleElements = document.createElement('ul');
for (let i = 0; i < nomsDispo.length; i++) {
    const nomElementDispo = document.createElement('li');
    nomElementDispo.innerText = nomsDispo[i] + " - " + prix[i];
    disponibleElements.appendChild(nomElementDispo);
}
document.querySelector('.disponibles')
.appendChild(disponibleElements);*/