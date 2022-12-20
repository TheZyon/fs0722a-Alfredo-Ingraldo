/* keyword abstract -> classi base che non possono essere istanziate */

abstract class Veicolo { 
    private colore: string; //accessibile solo dall'interno della classe (come le tette di tua mamma)
    protected modello: string; //accessibile solo nella classe e nelle estensioni (come il pc di tua mamma)
    protected marca: string;

    constructor(marca: string, modello: string, colore: string) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    public vernicia(colore: string): void { //consente di modificare colore dall'esterno
        this.colore = colore;
    }
    public coloreCorrente(): string { 
        return this.colore;
    }
    public abstract dettagliVeicolo(): string; //metodo astratto che verrà implementato nelle estensioni
}

//const veicolo = new Veicolo(....) da errore perchè non si può instanziare una classe astratta

class Automobile extends Veicolo { 
    constructor(marca:string, modello:string, colore:string) { 
        super(marca, modello, colore);
    }
    public dettagliVeicolo(): string { 
        return `${this.marca}`;
    }
}

var jaguar = new Automobile("jaguar", "pippetta", "nero");
console.log(jaguar.dettagliVeicolo());
jaguar.vernicia("verdino liquame");
console.log(jaguar.coloreCorrente());