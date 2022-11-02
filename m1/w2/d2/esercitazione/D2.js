/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*i principali datatype di Javascript sono
* number (contiene un numero);
* string (contiene una stringa di caratteri);
* boolean (contiene true o false );
*undefined (è il tipo di una variabile che è stata definita ma non le è stato assegnato ancora un valore)
* null invece è il tipo di una variabile che è stata definita e le è stato assegnato come valore "null". Sta a significare che la variabile
* è vuota;
* object ( tipo oggetto);
* array (tipo array).*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Alfredo";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let s = 12 + 20;
console.log(s);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Ingraldo";
const PI = 3.14159;
//se scrivo PI=22 mi segnala errore nella console
// le variabili const, una volta definite e assegnato loro un valore, non possono avere modificato il valore

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4 - x;
console.log(y);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

if (name1 != name2) { 
  console.log("sono diversi");
}

//verifichiamo che se entrambe sono trasformate in lowercase allora si ha l'uguaglianza
if (name1.toLocaleLowerCase() == name2.toLocaleLowerCase()) { 
  console.log("sono uguali");
}