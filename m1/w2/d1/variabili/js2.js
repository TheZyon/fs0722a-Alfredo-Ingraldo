var a;
console.log(a); // esce undefined

a = 4;
console.log(a); //esce 4


//tipizzazione
/* tipi di variabili:
number
string
array
object
boolean*/

var a = [1, 2, 3, "ciao", []]; //una lista di valori
var obj = { //una lista di coppie chiave-valore
    nome: "mario",
    cognome: "rossi",
    età: 66,
    misurePene: [3,14]
}

document.querySelector("p").innerHTML = obj.misurePene[0];
console.log(obj.misurePene[0]);


//typeof
console.log("il tipo dell'oggetto è " + typeof (obj.nome));
//isarray
console.log(typeof (true));

//parkour
var x = "5";
var y = 5;
console.log(y + x); //quando sommo un numero ad una stringa contenente un numero, il numero diventa una stringa e viene concatenato

//CONCATENAMENTO
var saluto = 'ciao';
var nome = "marco";
console.log(saluto + " " + nome); //attenzione ad aggiungere " "

console.log(x * y); //con il * tra stringhe e numeri si trasformano le stringhe in numeri e si moltiplica

console.log(y*saluto); //esce NaN