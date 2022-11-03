const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue_gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
let characters = [];

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) { characters[i] = starWarsCharacters[i].name;}
console.log(characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/

let femaleCharacters = [
  {
    name: "Leia Organa",
    hair_colour: "brown",
    eye_colour: "brown",
  },
];

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/

let eyeColour = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blue_gray: [],
};

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
  */
starWarsCharacters.forEach(function (character) {
  switch (character.eye_color) {
    case "blue":
      eyeColour.blue.push(character);
      break;
    case "yellow":
      eyeColour.yellow.push(character);
      break;
    case "brown":
      eyeColour.brown.push(character);
      break;
    case "red":
      eyeColour.red.push(character);
      break;
    case "blue_gray":
      eyeColour.blue_gray.push(character);
      break;
    default:
      break;
  }
});

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
  */
let mass = 0;
let i = 0;
while (i < starWarsCharacters.length) {
  mass += eval(starWarsCharacters[i].mass);
  i++;
}

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

mass = 666;

/*ho ordinato nel modo seguente i vari case della switch perchè vengono verificati dall'alto verso il basso
e con il mio ordinamento compare il messaggio giusto nei casi in cui più condizioni siano verificate */
switch (true) {
  case mass > 1000:
    console.log("DANGER!OVERLOAD ALERT:Jump ship now!");
    break;
  case mass > 900:
    console.log("Critical load: over 900");
    break;
  case mass > 700:
    console.log("Warning: Load is over 700");
    break;
  case mass == 500:
    console.log("Ship is half loaded");
    break;
  case mass < 500:
    console.log("Ship is under loaded");
    break;
}
/*osservo che nella consegna dell'esercizio non è richiesto di trattare il caso di una massa maggiore di 500
infatti se si inserisce una massa di 666 non compare nulla in console*/

/* ESERCIZIO 8
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/

//ciclo con un forEach starwarsCharacters, ad ogni iterazione genero un numero casuale
// che può essere 0 o 1; se il numero è 1  e il genere del character è "n/a"
//allora avviene la riassegnazione

starWarsCharacters.forEach(function (character) {
  let rnd = Math.ceil(Math.random() * 100) % 2; //genero un numero casuale che può essere 0 o 1

  if (rnd == 1 && character.gender == "n/a") {
    character.gender = "robot";
  }
});

//per verificare a chi è stato cambiato il gender si può fare così

console.log(
  starWarsCharacters.filter(function (u) {
    return u.gender == "robot";
  })
);

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto crea un conosle.log per controllare la proprietà length di "characters" prima e dopo l'operazione
*/

console.log(characters.length); //sono 10


characters.forEach(function (character) {//scelgo un character
  femaleCharacters.forEach(function (fem) {//scelgo un femaleCharacter
    if (character == fem.name) {
      characters.splice(characters.indexOf(character), 1); //elimino il personaggio
    }
  });
});


console.log(characters.length); //sono 9, abbiamo tolto "Leia Organa"

/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/
function randomCharacter() { 
  let rnd = Math.round(Math.random() * starWarsCharacters.length); // rnd è un indice casuale di characters
  console.table(starWarsCharacters[rnd]);
}