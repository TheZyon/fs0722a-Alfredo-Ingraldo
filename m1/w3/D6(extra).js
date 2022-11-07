// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element > 5) {
      console.log(`${element} è maggiore di 5`);
      sum += element;
    } else {
      console.log(`${element} è minore di 5`);
    }
  });
  return sum;
}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [];

function Shopping(price, name, id, quantity) {
  this.price = price;
  this.name = name;
  this.id = id;
  this.quantity = quantity;
}

//riempio la shoppingCart con degli oggetti
for (let i = 0; i < 100; i++) {
  let rnd = Math.round(Math.random() * 15);
  shoppingCart[i] = new Shopping(
    rnd,
    `onlyfansSubscription for feet pics n.${i}`,
    i,
    5
  );
}

function shoppingCartTotal(shoppingCart) {
  let total = 0;
  for (g of shoppingCart) {
    total += g.price * g.quantity;
  }
  return total;
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(obj) {
  let l = shoppingCart.length;
  shoppingCart[l] = obj;
  return l + 1;
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
    let max = 0;
    let i = 0;
    let j=0;
  for (obj of shoppingCart) {
    if (obj.price > max) {
        max = obj.price;
        j = i;
    }
      i++;
  }
    return shoppingCart[j];
    
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(n) {
    let rnd = 0;
    let index = 0;
  while (rnd <= n) {
    console.log(rnd);
    rnd = Math.round(Math.random() * 9); //numero intero casuale da 0 a 9
      if (rnd > n) { index += 1; }
      else { index = Math.min(index - 1, 0); }
      if (index == 3) { console.log(`tre numeri maggiori di ${n}`); break; }
  }
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(arr) { 
    let arrN = [];
    for (u of arr) {
         //per ogni elemento di arr
        if (typeof (u) == "number") { //se è un numero lo aggiungi ad arrN
            arrN[arrN.length] = u; 
        }
    }
   return mediaAritmetica(arrN);  
}

function mediaAritmetica(arr) { //prende un array di numeri e restituisce la media aritmetica
    let s = 0;
    for (u of arr) { s += u; }
    return s / arr.length;
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
