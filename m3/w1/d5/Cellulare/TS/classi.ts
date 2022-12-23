export type nomeCompagnia = 'Tim' | 'Vodafone' | 'Iliad' | 'Bochiny' | 'blacked';
export type tipoContratto = 'vanilla' | 'medium' | 'fullInside';



export interface SmartPhone { 

    carica: number; //soldi nella scheda
    numeroChiamate: number; //numero chiamate attuate
    nomeCompagnia: nomeCompagnia;
    usernameUtente: string;
    tipoContratto: tipoContratto;
    id: number;

    ricarica(soldi: number): void; //ricarica fiel carica
    chiamata(minuti: number): void; //modellizza l'effetuazione di una chiamata
    numero404(): number; //restituisce carica disponibile
    getNumeroChiamate(): number; //restituisce numero chiamate
    azzeraChiamate(): void; //azzera numeroChiamate
}

/* tipi di utente in base al contratto */

export class UtenteVanilla implements SmartPhone{ //utente con contratto 'vanilla'

    carica: number; 
    numeroChiamate: number; 
    nomeCompagnia: nomeCompagnia; 
    usernameUtente: string;
    tipoContratto: tipoContratto = 'vanilla';
    id: number; 
    constructor(id: number = -1, carica: number = 0, numeroChiamate: number =0, nomeCompagnia: nomeCompagnia, usernameUtente: string) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.nomeCompagnia = nomeCompagnia;
        this.usernameUtente = usernameUtente;
        this.id = id;
    }


    ricarica(soldi: number): void { this.carica += soldi; }
    chiamata(minuti: number): void { this.numeroChiamate += 1; this.carica -= minuti * 0.20; }
    numero404(): number { return this.carica; }
    getNumeroChiamate(): number { return this.numeroChiamate; }
    azzeraChiamate(): string { this.numeroChiamate = 0; return "adesso tua moglie non saprà che hai chiamato l'amante"; }


}

export class UtenteMedium implements SmartPhone{ //utente con contratto 'vanilla'

    carica: number; 
    numeroChiamate: number; 
    nomeCompagnia: nomeCompagnia; 
    usernameUtente: string;
    tipoContratto: tipoContratto = 'vanilla';
    id: number; 
    constructor(id: number = -1, carica: number = 0, numeroChiamate: number =0, nomeCompagnia: nomeCompagnia, usernameUtente: string) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.nomeCompagnia = nomeCompagnia;
        this.usernameUtente = usernameUtente;
        this.id = id;
    }

    ricarica(soldi: number): void { this.carica += soldi; }
    chiamata(minuti: number): void { this.numeroChiamate += 1; this.carica -= minuti * 0.20; }
    numero404(): number { return this.carica; }
    getNumeroChiamate(): number { return this.numeroChiamate; }
    azzeraChiamate(): string { this.numeroChiamate = 0; return "bravo"; }


}

export class UtenteFullInside implements SmartPhone{ //utente con contratto 'vanilla'

    carica: number; 
    numeroChiamate: number; 
    nomeCompagnia: nomeCompagnia; 
    usernameUtente: string;
    tipoContratto: tipoContratto = 'vanilla';
    id: number; 
    constructor(id: number = -1, carica: number = 0, numeroChiamate: number =0, nomeCompagnia: nomeCompagnia, usernameUtente: string) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.nomeCompagnia = nomeCompagnia;
        this.usernameUtente = usernameUtente;
        this.id = id;
    }

    ricarica(soldi: number): void { this.carica += soldi; }
    chiamata(minuti: number): void { this.numeroChiamate += 1; this.carica -= minuti * 0.20; }
    numero404(): number { return this.carica; }
    getNumeroChiamate(): number { return this.numeroChiamate; }
    azzeraChiamate(): string { this.numeroChiamate = 0; return "pomplimenti sei proprio full inside"; }

}

/* classe per la gestione dei dati utente nel localStorage */

export class GestioneDatiUtente { //si occupa di salvare e aggiornare le info dell'account utente nel sessionStorage

    salvaUtente(utente: SmartPhone, id?: number): string {
        //aggiunge un id casuale ad utente, e salva il json nel localStorage;
        //ritorna una stringa con l'id

        if (id != undefined) { utente.id = id; }
        else { let rnd= Math.floor(Math.random()*10000)+1 
            utente.id = rnd;}
        
        let jsonUtente = JSON.stringify(utente);
        localStorage.setItem(`${utente.id}`, jsonUtente);
        console.log(jsonUtente);
      
        return `il tuo id è: ${utente.id}. Conservalo in un luogo segreto: ti servirà per accedere al tuo account.`;
    }

    pescaUtente(id: number): SmartPhone | string { 
        let utenteAdesso : SmartPhone; //sarà la classe opportuna che implementa SmartPhone, in base al contratto di utente
        let json = localStorage.getItem(`${id}`);
        if (json != null) {
            utenteAdesso = JSON.parse(json);
            switch (utenteAdesso.tipoContratto) {
                case 'vanilla': console.log("caso vanilla"); utenteAdesso = new UtenteVanilla(utenteAdesso.id, utenteAdesso.carica, utenteAdesso.numeroChiamate, utenteAdesso.nomeCompagnia, utenteAdesso.usernameUtente); break;
                case 'medium': console.log("caso medium"); utenteAdesso = new UtenteMedium(utenteAdesso.id, utenteAdesso.carica, utenteAdesso.numeroChiamate, utenteAdesso.nomeCompagnia, utenteAdesso.usernameUtente); break;
                case 'fullInside': console.log("caso fullInside"); utenteAdesso = new UtenteFullInside(utenteAdesso.id, utenteAdesso.carica, utenteAdesso.numeroChiamate, utenteAdesso.nomeCompagnia, utenteAdesso.usernameUtente); break;
            } 
            console.log("utenteAdesso è: ", utenteAdesso);
            return utenteAdesso;
        }
        else { return "errore, utente non trovato nel localStorage"; }

    }

}


export let testo = `<p class="intro">Caro utilizzatore, scegli l'operazione</p>
            <div class="container">
                <div id="ricaricaInp">
                    <label>inserisci ricarica</label> 
                    <input type="number">
                    <button>ricarica</button>
                </div>
                <div id="chiamataInp">
                    <label>inserisci minuti chiamata</label> 
                    <input type="number">
                    <button>chiama</button>
                </div>
                <div id="numero404Inp">
                    <label>chiama il 404</label>
                    <button>chiama</button>
                </div>
                <div id="numeroChiamateInp">
                    <label for="numeroChiamateInp">get_numero_chiamate </label> 
                    <button>get</button>
                </div>
                <div id="azzeraChiamateInp">
                    <label>azzera chiamate</label> 
                    <button>azzera!</button>
                </div>
        
                <div><p id="out"></p></div> <!-- per mostrare messaggi di output -->

                <div style="height: 1000px"></div>
        `;
