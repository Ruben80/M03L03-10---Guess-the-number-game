let naam = prompt("Welkom! Wat is je naam?");

alert("Hey " + naam + " ! Klik op OK om verder te gaan of druk op Enter");

let guess = prompt(
  "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
);

var x = Math.floor(Math.random() * 1 + 1);

console.log(x);
console.log(guess);

if (x == guess) {
  alert("Gefeliciteerd je hebt gewonnen");
  alert("Dag " + naam + " Tot de volgende keer!");
} else {
  alert("Helaas het nummer is niet juist, probeer het nog eens");
}
