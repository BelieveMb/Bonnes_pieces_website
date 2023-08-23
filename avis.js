function comptLetter(a, n){
    return a.charAt(n);
}
let tourne;
tourne = comptLetter('just',2);
console.log(tourne);
export function ajoutListenersAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button");

    for (let i = 0; i < piecesElements.length; i++) {
      piecesElements[i].addEventListener("click", async function (event) {
           /* pour récuperer l'id concerne et l'envoyer dans l'url... */
           const id = event.target.dataset.id;
           fetch(`http://localhost:8081/pieces/${id}/avis`);
      });
    }
}
