//#### SECONDA PARTE: USO JS PER FAR FUNZIONARE LA CALCOLATRICE

/**SPIEGAZIONE DELL'IDEA:
 *
 */

/**SCALETTA DEI TASTI CHE SI FARANNO FUNZIONARE:
 *il tasto equals √--------
 *tasti numerici √
 *tasto C che pulisce tutto, tasto +/- che cambia il segno
 *tasto . che permette di mettere i decimali √
 *operazioni elementari √
 *operazioni non elementari della calcolatrice scientifica
 *Rad, parentesi
 */

//la feature più complicata è stata la gestione delle funzioni composte
//si provi a calcolare cose del tipo sin(log(3.22-sin(0.1))+cos(44)): funziona!!


let backComputations = ""; //dove assembliamo le cose valutate
let backComputationIntermedia = [];
let backComputationFunctions = [];
let storia = document.getElementById("storia").children[0]; //il testo che viene scritto sul display quando si cliccano i tasti 
let calcoliPassati = document.getElementById("calcoliPassati"); //storia dei calcoli che si sono fatti, viene aggiornata ogni volta che si clicca sull'uguale
let o = []; //serve a tenere traccia di funzioni che si scrivono dopo l'argomento, come il fattoriale
let binaryOperatorLenghtAlert = 0;//indica se è stato cliccato un operatore binario non elementare come x^y

//#### FUNZIONI FONDAMENTALI PER NON RIPETERE CODICE #####

function aggiungiCalcoliPassati() {
  //crea un nuovo paragrafo e lo appende sopra il paragrafo dei calcoli passati precedente, poi ci inserisce la stringa
  calcoliPassati.appendChild(document.createElement("p"));
  calcoliPassati.children[calcoliPassati.children.length - 1].innerText =
    storia.innerText;
}

function operazione(op_str, index, op, op_str2) {
  /*permette di realizzare il funzionamento di quasi tutti i tasti non numerici
   *index è un parametro che è legato al tipo di operazione: 1 se è 1-aria, 2 se è binaria
   *op_str2 serve per funzioni 1-arie che si scrivono dopo dell'argomento
   *non compare se la funzione si scrive prima (es sin, cos, etc)
   *compare con valore 1 per il fattoriale e altri
   */
  if (storia.innerText != "0") {
    storia.innerText += op_str;
  } else {
    storia.innerText = op_str;
  }

  let l = backComputationFunctions.length;
  switch (index) {
    case 1:
      backComputationFunctions.push(op);
      backComputationIntermedia.push("");
      break;
    case 2:
      if (l > 0) {
        backComputationIntermedia[backComputationIntermedia.length - 1] +=
          op_str;
      }
      //quando la backComputationAlert.lenght>0 lavoriamo nella backComputationIntermedia
      else if (l == 0) {
        backComputations += op_str;
      }
      break;
  }
  if (op_str2 != undefined) {
    //se è stato passato questo parametro
    o[o.length] = op_str2;
  }
}

//#### TASTI VARI ####

//parentesi ), (
for (i = 0; i < 2; i++) {
  document.getElementsByClassName("parL")[i].addEventListener(
    "mousedown",

    function () {
      if (storia.innerText == "0") {
        storia.innerText = "(";
      } else {
        storia.innerText += "(";
      }
    }
  );
}

for (i = 0; i < 2; i++) {
  document.getElementsByClassName("parR")[i].addEventListener(
    "mousedown",

    function () {
      storia.innerText += ")";
      if (binaryOperatorLenghtAlert == 0) {
        //non stiamo chiudendo dopo un operatore binario non elementare

        let l = backComputationFunctions.length;
        if (l > 0) {
          let f_last = backComputationFunctions[l - 1];
          backComputationIntermedia[l - 1] = f_last(
            eval(backComputationIntermedia[l - 1])
          );
          if (l > 1) {
            backComputationIntermedia[l - 2] +=
              backComputationIntermedia[l - 1];
            backComputationIntermedia.splice(l - 1, 1);
          }
          backComputationFunctions.splice(l - 1, 1);
          if (backComputationFunctions.length == 0) {
            backComputations += backComputationIntermedia[0];
            backComputationIntermedia = [];
          }
        }
        //trattiamo il caso in cui la parentesi chiude l'argomento di una funzione che si pospone
        //come ad es il fattoriale
        if (o.length != "") {
          storia.innerText += o[o.length - 1];
          o.splice(o.length - 1, 1);
        }
      }
      //trattiamo il caso in cui la parentesi chiude l'argomento di una funzione binaria non elementare (es. x^y, log_x(y))
      else if (binaryOperatorLenghtAlert == 1) {
        let l = backComputationFunctions.length;
        if (l > 0) {
          let f_last = backComputationFunctions[l - 1];
          backComputationIntermedia[l - 1] = f_last(
            eval(backComputationIntermedia[l - 1])
          );
          if (l > 1) {
            backComputationIntermedia[l - 2] = backComputationIntermedia[l - 1];
            backComputationIntermedia.splice(l - 1, 1);
          }
          backComputationFunctions.splice(l - 1, 1);
          if (backComputationFunctions.length == 0) {
            backComputations = backComputationIntermedia[0];
            backComputationIntermedia = [];
          }
        }
        binaryOperatorLenghtAlert -= 1;
      } else if (binaryOperatorLenghtAlert > 1) {
        let l = backComputationFunctions.length;
        if (l > 0) {
          let f_last = backComputationFunctions[l - 1];
          backComputationIntermedia[l - 1] = f_last(
            eval(backComputationIntermedia[l - 1])
          );
          if (l > 1) {
            backComputationIntermedia[l - 2] = backComputationIntermedia[l - 1];
            backComputationIntermedia.splice(l - 1, 1);
          }
          backComputationFunctions.splice(l - 1, 1);
          if (backComputationFunctions.length == 0) {
            backComputations += backComputationIntermedia[0];
            backComputationIntermedia = [];
          }
        }
        binaryOperatorLenghtAlert -= 1;
      }
    }
  );
}

//il tasto equals

document.getElementById("equals").addEventListener("mousedown", equals);

function equals() {
  storia.innerText += "=" + eval(backComputations);
  aggiungiCalcoliPassati(storia.innerText);
  resetta(); //riporta alle definizioni iniziali alcune cose
}

//tasti numerici
for (let i = 1; i < 10; i++) {
  let tasto = document.getElementById(`${i}`);
  tasto.addEventListener("mousedown", function () {
    if (storia.innerText == "0") {
      storia.innerText = tasto.innerText;
    } else {
      storia.innerText += tasto.innerText;
    }
    if (backComputationFunctions.length > 0) {
      backComputationIntermedia[backComputationIntermedia.length - 1] +=
        tasto.innerText;
    } else {
      backComputations += tasto.innerText;
    }
    //se c'è un'operazione scientifica non binaria in corso, salviamo le cifre
  });
}

// tasto ZERO
let tasto = arrayRighe[arrayRighe.length - 1].children[2];

tasto.addEventListener("mousedown", function () {
  if (storia.innerText != "0") {
    storia.innerText += tasto.innerText;
  }
  let l = backComputationFunctions.length;
  if (l > 0) {
    backComputationIntermedia[backComputationIntermedia.length - 1] +=
      tasto.innerText;
  } else {
    backComputations += tasto.innerText;
  }
});

//tasto C resetta tutto tranne i calcoli passati, aggiunti via via in grigio
arrayRighe[0].children[2].addEventListener("mousedown", resetta);

function resetta() {
  storia.innerText = "0";
  backComputations = "";
  backComputationFunctions = [];
  backComputationIntermedia = [];
}

//il tasto +/-
arrayRighe[0].children[3].addEventListener("mousedown", sign);

function sign() {
  if (storia.innerText.charAt(0) != "-") {
    storia.innerText = "-" + storia.innerText;
  } else {
    storia.innerText.replace("-", "");
  }
}

//tasto . che permette di aggiungere i decimali

document.getElementById("dot").addEventListener("mousedown", dot);

function dot() {
  storia.innerText += ".";
  let l = backComputationFunctions.length;
  if (l > 0) {
    backComputationIntermedia[l - 1] += ".";
  }
}

//operazioni elementari +,-,*,:

document.getElementById("plus").addEventListener("mousedown", function () {
  operazione("+", 2);
});
document.getElementById("times").addEventListener("mousedown", function () {
  operazione("*", 2);
});
document.getElementById("minus").addEventListener("mousedown", function () {
  operazione("-", 2);
});
document.getElementById("divided").addEventListener("mousedown", function () {
  operazione("/", 2);
});

//####COME FACCIO LE FUNZIONI COMPOSTE #####
// clicco sin ----> mi aggiunge Math.sin in backComputationAlert--->
// dato che backComputationAlert.lenght >0, i tasti num che pigio vengono aggiunti a stringa backComputationString
//appena clicco ), backComputationString viene aggiornato con il valore del seno su eval(backComputationString) viene calcolato il sin(nmp)
//faccio backComputationAlert.pop
//se adesso backComputationAlert è vuoto, aggiungo il valore di backComputationString a backComputations

//operazioni avanzate
function powerOfTwo(n) {
  return 2 ** n;
}

document
  .getElementById("powerOfTwo")
  .addEventListener("mousedown", function () {
    operazione("2^(", 1, function (n) {
      return 2 ** n;
    });
  });

document.getElementById("sin").addEventListener("mousedown", function () {
  operazione("sin(", 1, Math.sin);
});

document.getElementById("sinh").addEventListener("mousedown", function () {
  operazione("sinh(", 1, Math.sinh);
});

document.getElementById("cos").addEventListener("mousedown", function () {
  operazione("cos(", 1, Math.cos);
});
document.getElementById("cosh").addEventListener("mousedown", function () {
  operazione("cosh(", 1, Math.cosh);
});
document.getElementById("tan").addEventListener("mousedown", function () {
  operazione("tan(", 1, Math.tan);
});
document.getElementById("tanh").addEventListener("mousedown", function () {
  operazione("tanh(", 1, Math.tanh);
});

//manca log_y
document.getElementById("log_y").addEventListener("mousedown", function () {
  let giorgia = new Audio("audio/giorgia.mp3");
  let g = new Audio("audio/giorgia.mp3");
  setTimeout(function () {
    g.play();

    setTimeout(function () {
      g.pause();
      g.currentTime = 1000;
    }, 1200);
  }, 0); //la pena per andare a cliccare questo tasto
});

document.getElementById("y-root").addEventListener("mousedown", function () {
  location.href = "https://www.youtube.com/watch?v=_pR9iwy3dlc";
});

document.getElementById("log").addEventListener("mousedown", function () {
  operazione("log(", 1, Math.log);
});
document.getElementById("log_2").addEventListener("mousedown", function () {
  operazione("log_2(", 1, Math.log2);
});

document.getElementById("log_10").addEventListener("mousedown", function () {
  operazione("log_10(", 1, Math.log10);
});

document.getElementById("fac").addEventListener("mousedown", function () {
  operazione("(", 1, fac, "!");
});

function fac(n) {
  switch (true) {
    case n < 0 || Number.isInteger(n) == false:
      return "il fattoriale esiste solo per interi positivi!";
      break;
    case n <= 1:
      return n;
      break;
    default:
      return n * fac(n - 1);
      break;
  }
}

document.getElementById("random").addEventListener("mousedown", function () {
  let r = Math.random();
  operazione(`${r}*(`, 1, function (n) {
    return n * r;
  });
});

document.getElementById("2-root").addEventListener("mousedown", function () {
  operazione("√(", 1, Math.sqrt);
});

document.getElementById("2-pow").addEventListener("mousedown", function () {
  operazione(
    "(",
    1,
    function (n) {
      return n ** 2;
    },
    "^2"
  );
});

document.getElementById("3-root").addEventListener("mousedown", function () {
  operazione("∛(", 1, function (n) {
    return n ** (1 / 3);
  });
});

document.getElementById("3-pow").addEventListener("mousedown", function () {
  operazione(
    "(",
    1,
    function (n) {
      return n ** 3;
    },
    "^3"
  );
});

document.getElementById("pow").addEventListener("mousedown", function () {
  binaryOperatorLenghtAlert += 1;
  operazione("^(", 1, lavoroPow);
});

function lavoroPow(u) {
  let l = backComputationIntermedia.length;
  if (l > 1) {
    return backComputationIntermedia[l - 2] ** u;
  } else {
    return eval(backComputations) ** eval(u);
  }
}

document.getElementById("rad").addEventListener("mousedown", function () {
  location.href = "https://www.youtube.com/watch?v=M8t-T6iA-nk";
});
