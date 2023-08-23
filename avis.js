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
           /* ... */
      });
    }
}