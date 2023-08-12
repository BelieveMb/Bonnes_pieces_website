//récuperation de données depuis le fichier JSON
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



 // // Récupération de l'élément du DOM qui accueillera les fiches
    // const sectionFiches = document.querySelector(".fiches");
    // // Création d’une balise dédiée à une pièce automobile
    // const pieceElement = document.createElement("article");
    // // On crée l’élément img.
    // const imageElement = document.createElement("img");
    // // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    // imageElement.src = pieces[i].image;
    // // Idem pour le nom, le prix et la catégorie...

    // // On rattache la balise article à la section Fiches
    // sectionFiches.appendChild(pieceElement);
    // // On rattache l’image à pieceElement (la balise article)
    // pieceElement.appendChild(imageElement);
    // // Idem pour le nom, le prix et la catégorie...