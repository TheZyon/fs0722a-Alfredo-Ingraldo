/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


//scrivo una funzione che ritorna il massimo tra i due numeri interi che riceve per argomento
function maggiore(n, m) { 
  let max = n <= m ? m : n;
  return max;
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function valeCinque(n) { 
  if (n != 5) { 
    console.log("not equal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function divisibilePerCinque(n) { 
  if (n % 5 == 0) {
    console.log("divisibile per 5");
  } 
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verificaOtto(n, m) { 
  if (n == 8 || m == 8 || n + m == 8 || n - m == 8 || m - n == 8) { 
    console.log("la condizione richiesta dall'esercizio 4 è verificata");
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function ammontareTotale(totalShoppingCart) { 
  let totaleAggiornato = totalShoppingCart;
  if (totaleAggiornato < 50) { 
    totaleAggiornato += 10; //aggiungo le spese di spedizione
  }
  return totaleAggiornato;
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function ammontareTotaleBlackFriday(totalShoppingCart) { 
  let totaleAggiornato = totalShoppingCart-0.2*totalShoppingCart; //applico lo sconto sul totale del carrello
  if (totaleAggiornato < 50) { 
    totaleAggiornato += 10; //aggiungo le spese di spedizione
  }
  return totaleAggiornato;
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x = 1;
let y = 11;
let z = 111;
function ordinamento(a, b, c) { 
  //uso la funzione "maggiore" che ho definito nelle righe 7-11
  console.log(maggiore(maggiore(a, b), c));
  
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function verificaNumero(x) {
  if (typeof (x) == "number") { console.log("è un numero"); }
  else {
    console.log("non è un numero");
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function pariDispari(n) { 
  let parità = n % 2 == 0 ? "pari" : "dispari";
  return parità;
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
//non trovo errori nel codice e sembra funzionare
let val =11
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.splice(2, 1);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arr = [];
for (i = 1; i < 11; i++) { 
  arr[i - 1] = i;
}

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr.splice(9, 1, 100);
