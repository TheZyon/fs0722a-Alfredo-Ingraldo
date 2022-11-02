//costanti

//si chiamano in maiuscolo

const PI = 3.14;

//non si possono modificare

//caso particolare:

const PIZZA = {
  gusto: "margherita",
  prezzo: 15,
};

//posso modificare i campi

PIZZA.prezzo = 10; //si può fare

//ma non si può fare ad es PIZZA={}

//#######   SCOPE della variabile   #######

let a = 234567;
{
  let a = 22;
  console.log(a);
} //fuori dal blocco queste modifiche non esistono
console.log(a); //esce 234567

{
  var b = 69;
}
console.log(b); //esce 69

//quindi var definisce una variabile a livello globale

//terminologia------> in js la tipizzazione è debole (detta anche dinamica) e non
//forte (detta anche statica), cioè il tipo della variabile può essere riassegnato
//mentre in Java ad es. la tipizzazione è statica

/* Operatori logici
 *&& and
 *|| or
 *! not
 */

// == uguale
// === strettamente uguale (anche i tipi coincidono)

console.log(5 == "5"); // riporta true
console.log(5 === "5"); // riporta false

//operatore ternario

let età = 3;
let accesso = età >= 18 ? "consentito" : "non consentito";
console.log(accesso); //non consentito

let html = document.querySelector("tr") || "<div></div>";

//costruttori di oggetti

function Pizza(gusto, prezzo) { 
    this.gusto = gusto;
    this.prezzo = prezzo;
    this.cuocere = function () { 
        console.log("uuuuu");
    }
}

let margherita = new Pizza("margherita", 5);
let array = ["mario", "mariella", 3, true, false];
console.table(array); //UTILE: mostra l'array in una tabella



//Funzioni

//le funzioni sono soggette ad hoisting: non importa dove si scrive la funzione, viene letta comunque

function saluto() { 
    return '<p>ciao</p>';
}

let sal = saluto(); //sal contiene l'html ritornato da saluto
