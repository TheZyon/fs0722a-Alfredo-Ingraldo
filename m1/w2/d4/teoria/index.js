


//esempio di costruttore con un metodo "mostraPrezzo" che prende un parametro

function Pizza(gusto, prezzo){ 
    this.gusto = gusto;
    this.prezzo = prezzo;
    this.mostraPrezzo = function (valuta) { 
        console.log(`il gusto è ${gusto}, il prezzo è ${prezzo}${valuta}`);
    }
}

//metodi array
let arr = [1, 2, 3];
arr.push(333); //aggiunge alla fine dell'array
arr.pop(); //elimina alla fine dell'array
arr.shift(); //elimina all'inizio dell'array
console.log(arr);