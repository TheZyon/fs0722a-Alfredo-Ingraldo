import { MotherAccount } from "./conti";





var namee :string = "Carlino";
var pass :string = "CarlinoBellino"
var interessi: number = 5;
var btnPrelievo = document.getElementsByTagName("button")[1];
var inputPrelievo:any = document.getElementsByTagName("input")[1];
var inputDeposito:any= document.getElementsByTagName("input")[0];
var btnDeposito = document.getElementsByTagName("button")[0];
var btnEstrattoConto=document.getElementsByTagName("button")[2];
var btnInteressi=document.getElementsByTagName("button")[3];
var out:any = document.getElementById("outputAtm");

//inizializzo il conto
let contoCarlino = new MotherAccount(namee, pass, interessi);

console.log(contoCarlino.nome);


//funziuonamento della CTA per il prelievo
btnPrelievo.addEventListener("mousedown", function () { 
    out.innerHTML=contoCarlino.withdraw(eval(inputPrelievo.value));
    

});

btnDeposito.addEventListener("mousedown", function () { 
    
    out.innerHTML=contoCarlino.deposit(eval(inputDeposito.value));

});

btnEstrattoConto.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.stampaSaldoAttuale();
});

btnInteressi.addEventListener("mousedown", function () { 
    out.innerHTML = contoCarlino.calcolaInteressi();
});