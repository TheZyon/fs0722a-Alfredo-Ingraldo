import { SonAccount, MotherAccount } from "./conti.js";


var name :string = "Carlino";
var pass :string = "CarlinoBellino"
var interessi: number = 5;
var btnPrelievo = document.getElementsByTagName("button")[0];
var inputPrelievo:any = document.getElementsByTagName("input")[0];
var inputDeposito:any= document.getElementsByTagName("input")[1];
var btnDeposito = document.getElementsByTagName("button")[1];
var btnEstrattoConto=document.getElementsByTagName("button")[2];
var btnInteressi=document.getElementsByTagName("button")[3];
var out:any = document.getElementById("outputAtm");

//inizializzo il conto
let contoCarlino = new MotherAccount(name, pass, interessi);

//funziuonamento della CTA per il prelievo
btnPrelievo.addEventListener("mousedown", function () { 
    
    out.innerHTML=contoCarlino.withdraw(inputPrelievo.value);

});

btnDeposito.addEventListener("mousedown", function () { 
    
    out.innerHTML=contoCarlino.deposit(inputDeposito.value);

});

btnEstrattoConto.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.stampaSaldoAttuale();
});

btnInteressi.addEventListener("mousedown", function () { 
    out.innerHTML = contoCarlino.calcolaInteressi();
});