import { SonAccount, MotherAccount } from './conti.js';

var cta = document.querySelector("button");

console.log(cta);

var nome = document.querySelector("form")?.children[0].value;
var pass= document.querySelector("form")?.children[1].value;

cta?.addEventListener("mousedown", function () { //metto i dati nel session storage
    var mother = new MotherAccount(nome, pass, 5);
    sessionStorage.setItem(nome, JSON.stringify(mother)); //metto i dati nel session storage
});



let conto = new MotherAccount(nome, pass, 5);


