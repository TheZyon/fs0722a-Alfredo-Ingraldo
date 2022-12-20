"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotherAccount = exports.SonAccount = void 0;
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
exports.SonAccount = SonAccount;
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
exports.MotherAccount = MotherAccount;
let mariello = new MotherAccount("mariello", "uuuuu", 5);
console.log(mariello.deposit(500), mariello.withdraw(200), mariello.stampaSaldoAttuale(), mariello.calcolaInteressi());
