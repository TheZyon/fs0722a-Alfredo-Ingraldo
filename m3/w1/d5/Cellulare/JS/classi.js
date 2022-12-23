/* tipi di utente in base al contratto */
export class UtenteVanilla {
    carica;
    numeroChiamate;
    nomeCompagnia;
    usernameUtente;
    tipoContratto = 'vanilla';
    id;
    constructor(id = -1, carica = 0, numeroChiamate = 0, nomeCompagnia, usernameUtente) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.nomeCompagnia = nomeCompagnia;
        this.usernameUtente = usernameUtente;
        this.id = id;
    }
    ricarica(soldi) { this.carica += soldi; }
    chiamata(minuti) { this.numeroChiamate += 1; this.carica -= minuti * 0.20; }
    numero404() { return this.carica; }
    getNumeroChiamate() { return this.numeroChiamate; }
    azzeraChiamate() { this.numeroChiamate = 0; return "adesso tua moglie non saprà che hai chiamato l'amante"; }
}
export class UtenteMedium {
    carica;
    numeroChiamate;
    nomeCompagnia;
    usernameUtente;
    tipoContratto = 'vanilla';
    id;
    constructor(id = -1, carica = 0, numeroChiamate = 0, nomeCompagnia, usernameUtente) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.nomeCompagnia = nomeCompagnia;
        this.usernameUtente = usernameUtente;
        this.id = id;
    }
    ricarica(soldi) { this.carica += soldi; }
    chiamata(minuti) { this.numeroChiamate += 1; this.carica -= minuti * 0.20; }
    numero404() { return this.carica; }
    getNumeroChiamate() { return this.numeroChiamate; }
    azzeraChiamate() { this.numeroChiamate = 0; return "bravo"; }
}
export class UtenteFullInside {
    carica;
    numeroChiamate;
    nomeCompagnia;
    usernameUtente;
    tipoContratto = 'vanilla';
    id;
    constructor(id = -1, carica = 0, numeroChiamate = 0, nomeCompagnia, usernameUtente) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.nomeCompagnia = nomeCompagnia;
        this.usernameUtente = usernameUtente;
        this.id = id;
    }
    ricarica(soldi) { this.carica += soldi; }
    chiamata(minuti) { this.numeroChiamate += 1; this.carica -= minuti * 0.20; }
    numero404() { return this.carica; }
    getNumeroChiamate() { return this.numeroChiamate; }
    azzeraChiamate() { this.numeroChiamate = 0; return "pomplimenti sei proprio full inside"; }
}
/* classe per la gestione dei dati utente nel localStorage */
export class GestioneDatiUtente {
    salvaUtente(utente, id) {
        //aggiunge un id casuale ad utente, e salva il json nel localStorage;
        //ritorna una stringa con l'id
        if (id != undefined) {
            utente.id = id;
        }
        else {
            let rnd = Math.floor(Math.random() * 10000) + 1;
            utente.id = rnd;
        }
        let jsonUtente = JSON.stringify(utente);
        localStorage.setItem(`${utente.id}`, jsonUtente);
        console.log(jsonUtente);
        return `il tuo id è: ${utente.id}. Conservalo in un luogo segreto: ti servirà per accedere al tuo account.`;
    }
    pescaUtente(id) {
        let utenteAdesso; //sarà la classe opportuna che implementa SmartPhone, in base al contratto di utente
        let json = localStorage.getItem(`${id}`);
        if (json != null) {
            utenteAdesso = JSON.parse(json);
            switch (utenteAdesso.tipoContratto) {
                case 'vanilla':
                    console.log("caso vanilla");
                    utenteAdesso = new UtenteVanilla(utenteAdesso.id, utenteAdesso.carica, utenteAdesso.numeroChiamate, utenteAdesso.nomeCompagnia, utenteAdesso.usernameUtente);
                    break;
                case 'medium':
                    console.log("caso medium");
                    utenteAdesso = new UtenteMedium(utenteAdesso.id, utenteAdesso.carica, utenteAdesso.numeroChiamate, utenteAdesso.nomeCompagnia, utenteAdesso.usernameUtente);
                    break;
                case 'fullInside':
                    console.log("caso fullInside");
                    utenteAdesso = new UtenteFullInside(utenteAdesso.id, utenteAdesso.carica, utenteAdesso.numeroChiamate, utenteAdesso.nomeCompagnia, utenteAdesso.usernameUtente);
                    break;
            }
            console.log("utenteAdesso è: ", utenteAdesso);
            return utenteAdesso;
        }
        else {
            return "errore, utente non trovato nel localStorage";
        }
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
