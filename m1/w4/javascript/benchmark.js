const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// ##### INIZIO CODICE #####

//##### BENCHMARK.HTML #####

let questionText = document.getElementById("questiontext");
let answers = document.getElementsByClassName("answer");
window.risposteCorretteDate = 0;
let nDomande = 10;
let nDomanda = 0;
let domanda;
let risposteCorrette=[];

//##### USO DELLE FUNZIONI PER FUNZIONAMENTO DELLA PAGINA #####

scegliEMostraDomanda(questions);

for (let a of answers) {
  a.addEventListener("mousedown", function () {
    if (a.innerHTML == domanda.correct_answer) {
      addTorisposteCorretteDate();
    }
    rimuoviDomanda(domanda, questions);
    console.log(questions);
    scegliEMostraDomanda(questions);
  });
}

//##### DICHIARAZIONE DELLE FUNZIONI ######

function getIndiceRispostaEsatta(q) {
  //ritorna l'indice del button che contiene la risposta esatta
  for (let i = 0; i < 4; i++) {
    if (answers[i].innerHTML == q.correct_answer) {
      return i;
    }
  }
}

function addTorisposteCorretteDate() {
  console.log("Esatto!");
  risposteCorretteDate += 1;
  risposteCorrette[risposteCorrette.length] = document.getElementById("questionNumber").innerHTML+": " +answers[getIndiceRispostaEsatta(domanda)].innerHTML;

}

function rimuoviDomanda(q, arr) {
  //rimuove q da arr

  for (let p of arr) {
    if (p.question == q.question) {
      arr.splice(arr.indexOf(p), 1);
    }
  }
}

function scegliEMostraDomanda(arr) {
  //mostra una domanda casuale di arr nella pagina e aggiunge 1 a nDomanda

  nDomanda += 1;

  if (nDomanda == 11) {

    document.cookie = `name=${risposteCorretteDate}`;
    window.location.href = "results.html";
  }
  for (let a of answers) {
    //idea di Simona:
    //serve a resettare la visibilità nel caso la domanda precedente sia boolean (vedi l'else)
    a.style.visibility = "visible";
  }
  //sistemo il div footer

  document.getElementById("questionNumber").innerHTML = `${nDomanda}`;
  //scelgo una domanda e sistemo il testo domanda
  let rnd = Math.round(Math.random() * (arr.length - 1));
  domanda = arr[rnd]; //domanda contiene la domanda attuale!
  questionText.innerHTML = domanda.question;

  //sistemo le risposte
  if (domanda.type == "multiple") {
    //caso multiple
    //console.log("sei nel blocco multiple");
    let rndArray = withoutClones(4);
    answers[rndArray[0]].innerHTML = domanda.correct_answer;
    answers[rndArray[1]].innerHTML = domanda.incorrect_answers[0];
    answers[rndArray[2]].innerHTML = domanda.incorrect_answers[1];
    answers[rndArray[3]].innerHTML = domanda.incorrect_answers[2];
  } else {
    //caso boolean
    //console.log("sei nel blocco boolean");
    answers[2].style.visibility = "hidden";
    answers[3].style.visibility = "hidden";
    answers[0].innerHTML = "False";
    answers[1].innerHTML = "True";
  }
}

function withoutClones(n) {
  //ritorna un array di n elementi casuali ciascuno con valore da 0 a n-1, tutti diversi
  let arr = [];
  let i = 0;
  while (i < n) {
    rnd = Math.round(Math.random() * (n - 1)); //genero un numero casuale
    if (verificaTuttiDiversi(arr.concat([rnd]))) {
      //se rnd è diverso da tutte le entrate di arr arr
      arr.push(rnd); //lo aggiungo ad arr
      i = i + 1;
    }
  }
  return arr;
}

function verificaTuttiDiversi(arr) {
  //prende un array di lunghezza almeno 1 e verifica se i suoi elementi sono tutti diversi
  for (let u of arr) {
    if (arr.indexOf(u) < arr.lastIndexOf(u)) {
      //se ci sono due copie di u in arr
      return false;
    }
  }
  return true;
}







/*document.cookie
'name=6'
let Mariello=document.cookie;
undefined
var x = "Una nuova stringa".charAt(2);
undefined
Mariello.charAt(5)
'6'
eval(Mariello.charAt(5))
6*/


//orologio
const countdownNumberEl = document.getElementById("countdown-number");
let countdown = 30;






countdownNumberEl.textContent = countdown;

let g=document.getElementById("circleGiorgia");


g.style.animation = "countdown 30s linear infinite forwards";



for (let a of answers) {

  a.addEventListener("mousedown", function () { 
    countdown = 30;
    resetAnimation();
    //c'è già un event listener che attiva scegliEMostraDomanda() attaccato ai CTA
  });
 }


setInterval(gestioneOrologio, 1000);

function gestioneOrologio() {
  /*
  *1) verifica se countdown è minore di 1, se sì resetta il countdown, altrimenti lo diminuisce di 1
  *2) se il countdown è 30 resetta l'animazione del cerchio (e toglie la domanda dall'array e mostra la domanda successiva)
  *
  */

  countdown = --countdown < 1 ? 30 : countdown;
  countdownNumberEl.textContent = countdown;
    
  
  if (countdown == 30) {
    console.log("tempo scaduto");
      rimuoviDomanda(domanda, questions);
    console.log(questions);
    resetAnimation();
    scegliEMostraDomanda(questions);
    }
}

function resetAnimation() { 
  g.style.animation = "";
    setTimeout(function () { g.style.animation = "countdown 30s linear infinite forwards" }, 1);
}



document.querySelector("#blue circle").classList.add = "animation";





// TIPS:

// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno.
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

