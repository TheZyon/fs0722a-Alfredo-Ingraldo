/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function stringhe(str1, str2) {
  let s = str1.slice(0, 2);
  let t = str2.slice(str2.length - 3);
  return s.concat(t).toUpperCase();
}

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */
let arr = [];
for (let i = 0; i < 100; i++) {
  if (i % 2 != 0) {
    arr.push(i);
  }
}
console.log(arr);
/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

const skipFive = function () {
  let array = [];
  for (let i = 1; i < 100; i++) {
    if (i % 5 === 0) {
      array.push(i);
    }
  }
  console.log(array);
};

/*arr = []; //resetto arr
for (let i = 1; i < 100; i++) {
  if (i % 5 == 0) {
    arr.push(i);
  }
}
console.log(arr);*/
/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
let randArr = [];
for (i = 0; i < 10; i++) {
  randArr.push(Math.round(Math.random() * 100));
}

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

//scrivo una funzione che ritorna un array con i valori pari dell'argomento

arr = [];
for (let i = 0; i < 100; i++) {
  arr[i] = i;
}

function ritornaArrayConIPari(arr) {
  return arr.filter((e) => {
    return e % 2 == 0;
  });
}

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

const sommaArray = function (arr) {
  let s = 0;
  arr.forEach((element) => {
    s += element;
  });
  return s;
};

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

const addOne = function (arr) {
  return arr.map((e) => {
    return (e = e + 1);
  });
};

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

let animali = ["Adinolfi", "Berlu", "Salvini"];
function strToNumArray(array) {
  let s = [];
  for (let u of array) {
    s.push(u.length);
  }
  return s;
}

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

const deleteEvenFromArray = function (arr) {
  return arr.filter((e) => {
    return (e + 1) % 2 == 0;
  });
};

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

//riceve un array non vuoto di numeri
//e ritorna true se le entrate sono tutte diverse, false altrimenti
function verificaTuttiDiversi(arr) {
  //caso array non vuoto
  if (arr.length > 0) {
    for (let u of arr) {
      if (arr.indexOf(u) < arr.lastIndexOf(u)) {
        //se ci sono due copie di u in arr
        return false;
      }
    }
    return true;
  } 
  }


function tenRandomWithoutClones() {
  arr = [];
  i = 0;
  while(i<10) {
    rnd = Math.round(Math.random() * 10); //genero un numero casuale
    let arr1 = arr.concat([rnd]); //arr1 è arr concatenato al nuovo rnd
    
    if (verificaTuttiDiversi(arr1)) { //se rnd è diverso da tutti gli elementi precedenti
      arr.push(rnd); //lo aggiungo ad arr
      i = i + 1;
    }
  }
  return arr;
}

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
const invertiArray = function (array) {
  let arrayReversed = [];
  let l = array.length;
  for (i = 0; i < l; i++) { 
    arrayReversed[i] = array[l-1-i];
  }
  return arrayReversed;
}


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function filmPiùVecchio(arr){ 
  let indexOfFilmPiuVecchio = 0; //si aggiorna con la posizione del film più vecchio
  let annoPiuVecchio = 3000; //si aggiorna con l'anno più antico
  for (let film of arr) { 
    if (eval(film.Year) < annoPiuVecchio) {
      annoPiuVecchio = eval(film.Year);
      console.log(annoPiuVecchio);
      indexOfFilmPiuVecchio = arr.indexOf(film);
    }
  }
  return arr[indexOfFilmPiuVecchio];
}


/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function l(array) { 
  return array.length;
}


/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function titoli(arr) { 
  let titoli = [];
  for (let film of movies) { 
    titoli.push(film.Title);
  }
  return titoli;
}


/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function film2000(arr) { 
  return arr.filter((film) => { return film.Year >= 2000; });
}


/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function getFilmByID(imdbID, arr) { 
  return arr.filter((film) => { return film.imdbID == imdbID; });
}
/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function somma(array) { 
  let s = 0; 
  for (let film of movies) { 
    s += film.Year;
  }
  return s;
}


/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

function searchByWord(word, array) { 
  return array.filter((film) => { return film.Title.includes(word); });
}