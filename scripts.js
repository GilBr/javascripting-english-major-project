//console.log("scripts.js chargé");
//$("#response").html("scripts.js chargé");
// Déclaration variable
let userInput;
// Affichage boite de saisie pour variable
userInput = prompt("Quelle est votre douceur préférée ?","Répondre ici");
// Boucle if sur valeur chocolat
if ( userInput === "chocolat") {
  $("#response").html("Super !");
} else {
  $("#response").html("Pourquoi pas du chocolat ?");
}
