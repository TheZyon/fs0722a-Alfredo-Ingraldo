"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conti_js_1 = require("./conti.js");
var name = "Carlino";
var pass = "CarlinoBellino";
var interessi = 5;
var btnPrelievo = document.getElementsByTagName("button")[0];
var inputPrelievo = document.getElementsByTagName("input")[0];
var inputDeposito = document.getElementsByTagName("input")[1];
var btnDeposito = document.getElementsByTagName("button")[1];
var btnEstrattoConto = document.getElementsByTagName("button")[2];
var btnInteressi = document.getElementsByTagName("button")[3];
var out = document.getElementById("outputAtm");
//inizializzo il conto
let contoCarlino = new conti_js_1.MotherAccount(name, pass, interessi);
//funziuonamento della CTA per il prelievo
btnPrelievo.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.withdraw(inputPrelievo.value);
});
btnDeposito.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.deposit(inputDeposito.value);
});
btnEstrattoConto.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.stampaSaldoAttuale();
});
btnInteressi.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.calcolaInteressi();
});
