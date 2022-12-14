/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.round(Math.random() * 20);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Alfredo",
  surname: "Ingraldo",
  age: 27,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["C", "Java", "JavaScript"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

addSkill("cucinare il riso bollito con il pollo, gnammy");
function addSkill(skill) {
  me.skills.push(skill);
}

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.round(Math.random() * 5 + 1);
}

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(n, m) {
  return Math.max(n, m);
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) {
  return str.split(" ");
}

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, b) {
  if (b == true) {
    return str.slice(1, str.length);
  } else {
    return str.slice(0, str.length - 1);
  }
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(str) {
  //trasforma la stringa in un array "array" splittandola sugli spazi,
  //ottiene un array1 filtrato sulle lettere(con filter)
  //ritrasforma array1 in stringa
  let array = str.split(" ");
  array1 = array.filter((e) => {
    return isNumeric(e) == false;
  });
  let str1 = "";
  for (let e of array1) {
    str1 += e + " ";
  }
  return str1.slice(0, str1.length - 1); //togliamo l'ultimo spazio
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str) {
  //sfrutto il metodo checkValidity
  let input = document.createElement("input");
  input.setAttribute("type", "email");
  input.value = str;
  return input.checkValidity();
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  //trasforma l'obj date in una stringa con toDateString()
  //poi spezza la stringa in un array e prende il primo elemento (che corrisponde al giorno)
  let date = new Date();
  return date.toDateString().split(" ")[0];
}

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(n) {
  let objReturned = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < n; i++) {
    let res = dice();
    objReturned.sum += res;
    objReturned.values[objReturned.values.length] = res;
  }
  return objReturned;
}

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

let dateToCmp = new Date();

function howManyDays(date) {
  let currentDate = new Date();
  let year1 = date.getFullYear();
  let year2 = currentDate.getFullYear();
  let d = mostRecent(date, currentDate); //d è un array con d[0] data precedente nel tempo a d[1]
  let r = giorniDaInizioAnno(d[0]) + giorniAFineAnno(d[1]); //una quantità di giorni che serve dopo
  return (Math.abs(year1 - year2) + 1) * 365 - r - 1;
  //il primo addendo da i giorni che stanno tra il primo anno e l'ultimo anno,
  //poi ci sottraggo r per ottenere i giorni che sono passati veramente
}

function mostRecent(date1, date2) {
  let arr = [date1, date2];
  if (date1.getFullYear() != date2.getFullYear()) {
    return arr.sort((a, b) => {
      return compare(a.getFullYear(), b.getFullYear());
    }); //riordino arr comparando gli anni e ho finito
  } else if (date1.getMonth() != date2.getMonth()) {
    //confrontiamo i mesi
    return arr.sort((a, b) => {
      return compare(a.getMonth(), b.getMonth());
    }); //idem di sopra ma con i mesi
  } else {
    //anche i mesi sono uguali
    return arr.sort((a, b) => {
      return compare(a.getDate(), b.getDate());
    }); //idem di sopra ma con i giorni
  }
}

function giorniDaInizioAnno(date) {
  //ritorna il numero di giorni dall'inizio dell'anno della data al giorno della data
  let sum = 0;
  let date1 = date;
  let year = date.getFullYear();
  while (date1.getFullYear() == year) {
    date1.setDate(date1.getDate() - 1);
    sum += 1;
  }
  sum -= 1;
  return sum;
}

function giorniAFineAnno(date) {
  //idem alla funzione di sopra, ma restituisce i giorni che mancano alla fine dell'anno
  let sum = 0;
  let date1 = date;
  let year = date.getFullYear();
  while (date1.getFullYear() == year) {
    date1.setDate(date1.getDate() + 1);
    sum += 1;
  }
  sum -= 1;
  return sum;
}

function compare(a, b) {
  switch (true) {
    case a < b:
      return -1;
    case a > b:
      return 1;
    default:
      return 0;
  }
}

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  let birthday = new Date();
  birthday.setDate(9);
  birthday.setMonth(3);
  if (howManyDays(birthday) == 0) {
    return true;
  } else {
    return false;
  }
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

class Persona {
  constructor(
    name = "mario",
    surname = "rossi",
    age = 50,
    qi = 80,
    votaGiorgia = true
  ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.qi = qi;
    this.votaGiorgia = votaGiorgia;
  }
}

let mariello = new Persona();

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let newestMovie = { Year: 0 };
  for (let movie of movies) {
    if (eval(movie.Year) >= eval(newestMovie.Year)) {
      newestMovie = movie;
    }
  }
  return newestMovie;
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies() {
  return movies.length;
}
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
  let arr = [];
  for (let movie of movies) {
    arr[arr.length] = movie.Year;
  }
  return arr;
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  let arr = [];
  for (let movie of movies) {
    if (eval(movie.Year) < 2000) {
      arr[arr.length] = movie;
    }
  }
  return arr;
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  let sum = 0;
  for (let movie of movies) {
    sum += movie.Year;
  }
  return sum;
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(str) {
  return movies.filter((movie) => {
    return movie.Title.includes(str);
  });
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str) {
  let obj = {};
  obj.match = searchByTitle(str);
  obj.unmatch = movies.filter((movie) => {
    return !movie.Title.includes(str);
  });
  return obj;
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(n) {
  movies.splice(n, 1);
  return movies;
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainer() {
  return document.getElementById("container");
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectTd() {
  return document.querySelectorAll("td");
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTds() {
  let arr = selectTd();
  for (let td of arr) {
    console.log(td.innerText);
  }
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function red() {
  let arr = document.querySelectorAll("a");
  for (let a of arr) {
    a.style = "background-color:red";
  }
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function add() {
  let list = document.getElementById("myList");
  list.appendChild(document.createElement("li"));
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function empty() {
  let list = document.getElementById("myList");
  for (let child of list.children) {
    list.removeChild(child);
  }
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function test() {
  let arr = document.querySelectorAll("tr");
  for (let tr of arr) {
    tr.setAttribute("class", "test");
  }
}
// [EXTRA] JS Avanzato (avanzato solo per chi ha votato Giorgia)

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(n) {
  //Step 1: creo e appendo un div in cui inserirò l'albero
  let div = document.createElement("div");
  document.body.appendChild(div);

  //Step 2: con due cicli for costruisco l'albero e lo metto nel div
  for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 0; j < i; j++) {
      s += "*";
    }
    div.innerHTML += s + "<br>";
    s = "";
  }
}

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****


 


*/
function tree(n) {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.style = "white-space:pre"; //questo serve per preservare gli spazi nel testo che inserirò nel div

  for (let i = 0; i < n; i++) {
    let s = "";
    let t = "";
    for (k = 0; k < 2 * (n - i - 1); k++) {
      /*ci serve solo per fare 2*(n-i-1) iterazioni che servono a mettere gli spazi a sinistra
      si scopre che questo è il numero giusto per allineare graficamente gli asterischi 
      in modo da formare un albero, e non n-i-1 come uno potrebbe pensare inizialmente*/
      t += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      //in questo modo si fanno (i-esimo numero dispari)-iterazioni
      s += "*";
    }
    div.innerHTML += t + s + "<br>";
  }
}
//Questo lo sapeva fare anche Giorgia
//infatti lo ha inserito nella biografia, nel capitolo sull'importanza del natale per la famiglia cristiana 

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(p) {
  
  if (p == 1) { return true; }
  else {
    let dIndex = 0;
    for (let d = 1; d <= p; d++) {
      if (p % d == 0) { dIndex++; }
    }
    switch (dIndex) {
      case 2: return true;
      default: return false;
    }
  }
} 








/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
