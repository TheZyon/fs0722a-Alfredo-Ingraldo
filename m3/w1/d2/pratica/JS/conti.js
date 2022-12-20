export class SonAccount {
    balanceInit; //private di modo che vi si possa accedere dall'interno della classe
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
export class MotherAccount extends SonAccount {
    nome;
    pass;
    interessi; //all'apertura del conto, si fissa un tasso di interesse. Ad es. 10 corrisponde al 10%
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
