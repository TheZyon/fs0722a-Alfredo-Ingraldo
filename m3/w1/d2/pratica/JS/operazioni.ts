class SonAccount {
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

}

class MotherAccount extends SonAccount { 
    
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