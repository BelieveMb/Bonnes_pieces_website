//export c'est pour rendre cette function disponible en dehors du fichier
export function ajoutListenersAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button");
    //select all btn in html
    for (let i = 0; i < piecesElements.length; i++) { //parcourir all btn
      piecesElements[i].addEventListener("click", async function (event) { //add event
           /* pour récuperer l'id concerne et l'envoyer dans l'url... */
           const id = event.target.dataset.id;
           fetch(`http://localhost:8081/pieces/${id}/avis`);
      });
    }
}
