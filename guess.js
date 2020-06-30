var userNumber = 1;
var counter = 0;
var maxTries = 5;
var triesLeft = maxTries;
var randomNumber = Math.floor(Math.random() * userNumber + 1);

var name = prompt("Welkom! Wat is je naam?");
alert("Hey " + name + " ! Klik op OK om verder te gaan of druk op Enter");

while (guess !== randomNumber) {
  var guess = prompt(
    "Voer een nummer in van 1 tot " + userNumber + " om te beginnen met raden...");
    counter += 1;
    triesLeft -= 1;

    if (counter > maxTries) {      
      document.write("Je hebt geen pogingen meer over. Druk op F5 om nogmaals te spelen.");
      break
    };

    if (guess == randomNumber) {
          alert("Gefeliciteerd je hebt gewonnen");
          document.write("<p> Het juiste nummer was " + randomNumber + "." + "</p>");
          document.write("<p> Het kostte je " + counter + " poging(en) om het te raden." + "</p>");
          alert("Dag " + name + " tot de volgende keer!");          
          break
        } else {           
            alert("Helaas het nummer is niet juist, probeer het nog eens");
            alert("Je hebt nog " + triesLeft + " pogingen over!");
          }  
  } 

  console.log("program complete");