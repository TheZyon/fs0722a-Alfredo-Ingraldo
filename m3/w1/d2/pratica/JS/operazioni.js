"use strict";
class SonAccount {
    constructor() {
        this.balanceInit = 0; //balanceInit inizializzato a 0
    }
    deposit(soddi) {
        this.balanceInit += soddi;
        return "depositati euro: " + `${soddi}`;
    }
    withdraw(soddi) {
        if (this.balanceInit >= soddi) {
            this.balanceInit -= soddi;
            return "ritirati euro: " + `${soddi}`;
        }
        else {
            return "errore nel procedimento dalla banca...vale a dire che sei povero";
        }
    }
    stampaSaldoAttuale() {
        return "Possiedi: " + this.balanceInit;
    }
    stampaStoria() {
        return "";
    }
}
class MotherAccount extends SonAccount {
    constructor(nome, pass, interessi) {
        super();
        this.interessi = interessi * 0.01;
        this.nome = nome;
        this.pass = pass;
    }
    calcolaInteressi() {
        let soldiDaUscire = this.balanceInit * this.interessi + this.balanceInit;
        this.balanceInit = 0;
        return `Hai raccattato: ${soldiDaUscire}€. Pomplimenti!`;
    }
}
var namee = "Carlino";
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
let contoCarlino = new MotherAccount(namee, pass, interessi);
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
