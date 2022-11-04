//#### SECONDA PARTE: USO JS PER FAR FUNZIONARE LA CALCOLATRICE

/**SPIEGAZIONE DELLA MIA IDEA:
 * quando si
 */

/**SCALETTA DEI TASTI CHE SI FARANNO FUNZIONARE:
 *tasti numerici √
 *tasto C che pulisce tutto, tasto +/- che cambia il segno
 *tasto . che permette di mettere i decimali √
 *operazioni elementari √
 *il tasto equals √--------
 *operazioni avanzate
 *Rad, parentesi
 */

let ciProvasti = "Non puoi dividere per 0 baby ;)";
let S = "";
let display = document.getElementById("display").children[0];

//tasti numerici

for (let i = 1; i < 10; i++) {
  let tasto = document.getElementById(`${i}`);
  tasto.addEventListener("mousedown", function () {
    if (display.innerText == "0" || display.innerText == ciProvasti) {
      display.innerText = tasto.innerText;
    } //se il display segna 0 o errore
    else {
      display.innerText += tasto.innerText;
    }
  });
}

// tratto a parte il tasto dello zero
let tasto = arrayRighe[arrayRighe.length - 1].children[2];
tasto.addEventListener("mousedown", function () {
  if (display.innerText != "0") {
    display.innerText += tasto.innerText;
  }
});

//il tasto C che pulisce tutto
arrayRighe[0].children[2].addEventListener("mousedown", function () {
  S = "";
  display.innerText = "0";
});

//il tasto +/- che cambia il segno
arrayRighe[0].children[3].addEventListener("mousedown", sign);

function sign() {
  if (display.innerText != 0) {
    if (display.innerText.charAt(0) != "-") {
      display.innerText = "-" + display.innerText;
    } else {
      display.innerText.replace("-", "");
    }
  }
}

//tasto . che permette di aggiungere i decimali

document.getElementById("dot").addEventListener("mousedown", dot);

function dot() {
  if (display.innerText != ciProvasti) {
    display.innerText += ".";
  }
}

//le operazioni elementari +,-,*,:

document.getElementById("plus").addEventListener("mousedown", sum);
document.getElementById("times").addEventListener("mousedown", times);
document.getElementById("minus").addEventListener("mousedown", minus);
document.getElementById("divided").addEventListener("mousedown", factor);

function sum() {
  if (display.innerText != 0) {
    S += display.innerText + "+";
    display.innerText = "0";
  }
}

function times() {
  if (display.innerText != 0) {
    S += display.innerText + "*";
    display.innerText = "0";
  }
}
function minus() {
  if (display.innerText != 0) {
    S += display.innerText + "-";
    display.innerText = "0";
  }
}

function factor() {
  if (display.innerText != 0) {
    S += display.innerText + "/";
    display.innerText = "0";
  }
}

//il tasto equals
document.getElementById("equals").addEventListener("mousedown", function () {
  if (S != "") {
    S += display.innerText; //attenzione bug minore
    if (eval(S) != Infinity) {
      display.innerText = eval(S);
      S = "";
    } else {
      display.innerText = ciProvasti;
      S = "";
    }
  }
});

//operazioni avanzate

document
  .getElementById("powerOfTwo")
  .addEventListener("mousedown", function () {
    display.innerText = 2 ** eval(display.innerText);
  });
//attenzione manca RAD

document.getElementById("sin").addEventListener("mousedown", function () {
  display.innerText = Math.sin(eval(display.innerText));
});

document.getElementById("sinh").addEventListener("mousedown", function () {
  display.innerText = Math.sinh(eval(display.innerText));
});
document.getElementById("cos").addEventListener("mousedown", function () {
  display.innerText = Math.cos(eval(display.innerText));
});
document.getElementById("cosh").addEventListener("mousedown", function () {
  display.innerText = Math.cosh(eval(display.innerText));
});
document.getElementById("tan").addEventListener("mousedown", function () {
  display.innerText = Math.tan(eval(display.innerText));
});
document.getElementById("tanh").addEventListener("mousedown", function () {
  display.innerText = Math.tanh(eval(display.innerText));
});

//manca log_y
document.getElementById("log_y").addEventListener("mousedown", function () {
  display.innerText = Math.sin(eval(display.innerText));
});

document.getElementById("log").addEventListener("mousedown", function () {
  if (display.innerText != "0") {
    display.innerText = Math.log(eval(display.innerText));
  } else {
    display.innerText = "log(0) è meno infinito!";
  }
});
document.getElementById("log_2").addEventListener("mousedown", function () {
  if (display.innerText != "0") {
    display.innerText = Math.log2(eval(display.innerText));
  } else {
    display.innerText = "log(0) è meno infinito!";
  }
});

document.getElementById("log_10").addEventListener("mousedown", function () {
  if (display.innerText != "0") {
    display.innerText = Math.log10(eval(display.innerText));
  } else {
    display.innerText = "log(0) è meno infinito!";
  }
});

document.getElementById("fac").addEventListener("mousedown", function () {
  display.innerText = fac(eval(display.innerText));
}); //controllare che Math.factor rende il fattoriale




function fac(n) {
  switch (true) {
    case n < 0 ||Number.isInteger(n) ==false:
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

//fare rand
document.getElementById("random").addEventListener("mousedown", function () {
  display.innerText = Math.sin(eval(display.innerText));
});

document.getElementById("2-root").addEventListener("mousedown", function () {
  display.innerText = Math.SQRT2(eval(display.innerText));
});
document.getElementById("2-pow").addEventListener("mousedown", function () {
  display.innerText = eval(display.innerText) ** 2;
});
document.getElementById("3-root").addEventListener("mousedown", function () {
  display.innerText = eval(display.innerText) ** (1 / 3);
});
document.getElementById("3-pow").addEventListener("mousedown", function () {
  display.innerText = eval(display.innerText) ** 3;
});

document.getElementById("random").addEventListener("mousedown", function () {
  display.innerText = Math.sin(eval(display.innerText));
});
document.getElementById("random").addEventListener("mousedown", function () {
  display.innerText = Math.sin(eval(display.innerText));
});
