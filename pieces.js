//récuperation de données depuis le fichier JSON
const reponse =  await fetch('pieces-autos.json');
const pieces =  await reponse.json();
//création des balises sur le DOM
const article = pieces[0];
const imageElement = document.createElement("img");
//with document.createElement('img') we can create a balise img
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement =  document.createElement("p");
prixElement.innerText = `Prix : ${article.prix} £`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorieElement;

//affiche des balises via le parent
const sectionFiches = document.querySelector('.fiches');
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);