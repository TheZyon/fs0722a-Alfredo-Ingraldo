export class SonAccount {
    protected balanceInit: number; //private di modo che vi si possa accedere dall'interno della classe
    constructor() {
        this.balanceInit = 0; //balanceInit inizializzato a 0
    }


    deposit(soddi: number): string{ //aumento balanceInit e ritorno messaggio di successo
        this.balanceInit += soddi;
        return "depositati euro: " + `${soddi}`;
    }
    withdraw(soddi: number): string {//ritorno messaggio di errore oppure decremento balanceInit e ritorno messaggio di successo 
        if (this.balanceInit >= soddi) {
            this.balanceInit -= soddi;
            return "ritirati euro: " + `${soddi}`;
        }
        else { return "errore nel procedimento dalla banca...vale a dire che sei povero"; }
    }

    stampaSaldoAttuale():string {
        return "Possiedi: " + this.balanceInit;
    }

    stampaStoria(): string { 
        return "";
    }
}
export class MotherAccount extends SonAccount { 
    
    nome: string;
    pass:string;
    private interessi: number; //all'apertura del conto, si fissa un tasso di interesse. Ad es. 10 corrisponde al 10%
    constructor(nome:string, pass:string, interessi:number){ 
        super();
        this.interessi = interessi * 0.01;
        this.nome = nome;
        this.pass = pass;
    }

    calcolaInteressi(): string { //calcola interessi sulla percentuale e restituisce il balanceInit aumentato degli interessi
        let soldiDaUscire: number = this.balanceInit * this.interessi + this.balanceInit;
        this.balanceInit = 0;
        return `Hai raccattato: ${soldiDaUscire}€. Pomplimenti!`;
    }

}

let mariello = new MotherAccount("mariello", "uuuuu", 5);

console.log(mariello.deposit(500), mariello.withdraw(200), mariello.stampaSaldoAttuale(), mariello.calcolaInteressi());