//export c'est pour rendre cette function disponible en dehors du fichier
export function ajoutListenersAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button");
    //select all btn in html
    for (let i = 0; i < piecesElements.length; i++) { //parcourir all btn
      piecesElements[i].addEventListener("click", async function (event) { //add event
           /* pour récuperer l'id concerne et l'envoyer dans l'url... */
           
           const id = event.target.dataset.id;
          const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis"); 
           //stock la reponse de API
           const avis = await reponse.json();
           const pieceElement = event.target.parentElement;

           const avisElement = document.createElement("p");
            for (let i = 0; i < avis.length; i++) {
              avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;

            }
            pieceElement.appendChild(avisElement);
      });
    }
}

export function ajoutListenerEnvoyerAvis() {
  const formulaireAvis = document.querySelector(".formulaire-avis");
  formulaireAvis.addEventListener("submit", function (event) {
  /* ... */
    // Désactivation du comportement par défaut du navigateur
    event.preventDefault();
    // Création de l’objet du nouvel avis. et recuperer les entrées du
    // formulaire
    
    const avis = {
      pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
      utilisateur: event.target.querySelector("[name=utilisateur").value,
      commentaire: event.target.querySelector("[name=commentaire]").value,
    };
    // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(avis);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:8081/avis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: chargeUtile
    });

  });
}

