/* usiamo la keyword super nelle classi figlie */

class Carretta { 
    modello: string;
    marca: string;
    tipoCarretta: string;
    constructor(modello: string, marca: string, tipoCarretta:string) {
        this.modello = modello;
        this.marca = marca;
        this.tipoCarretta = tipoCarretta;
    }
    get dettagliVeicolo():string { 
        return `${this.tipoCarretta} - ${this.marca} - ${this.modello}`;
    }
}

class CarrettaNapoletana extends Carretta { 
    constructor(marca: string, modello: string) { 
        super(marca, modello, "carretta napoletana");       
    }
}

class Motoscafo extends Carretta{
    constructor(marca: string, modello: string) {
        super(marca, modello, 'Motoscafo');
     } 
}


/* //{
    "compilerOptions": {
        "target": "ES6",
        },
        "include": ["*.ts"],
        }
 */



        //si usa la keyword "instanceof" per verificare se un oggetto è istanza di una classe


let barchettaPotenteMaNonTroppo = new Motoscafo("Lilla", "Billa");
console.log(barchettaPotenteMaNonTroppo instanceof Motoscafo);        

//super si può usare in una classe per richiamare anche metodi della classe padre

class MacchinettaTaroccata extends CarrettaNapoletana { 
    constructor(modello: string, marca: string) { 
        super(modello, marca);
    }
    printInfo(): string { 
        return super.dettagliVeicolo + "ma è taroccata!";
    }
    
}

let tarocca = new MacchinettaTaroccata("1.0", "Eshposito");
console.log(tarocca.printInfo);




