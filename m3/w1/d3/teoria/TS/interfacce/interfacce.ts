
//esempio: funzione che prende come parametro un oggetto  
//per inviare una mail

/* function inviaMessaggio(msg: { email: string, messaggio: string }) { //il parametro indica che viene accettato un oggetto che ha almeno i fields email e messaggio
    mailSender.sendTo(msg.email, msg.messaggio);

}
 */

let mioMessaggio = { email: "Carlino", messaggio: "Muori" }; 
/* questo va bene per come argomento perchè ci sono almeno quei fields */

let messaggioIncompleto = { messaggio: "Viva il re" }; 


/* una volta che dichiariamo una struttura per il parametro, 
ts verifica  che effettivamente il parametro passato abbia quella struttura*/

/* interfaccia->per definire la struttura del parametro */

/* ######interfacce servono per avere una shortcut per avere la struttura di un tipo!! */
/* shortcut per avere la struttura di un oggetto o di una funzione...vediamo degli esempi */

interface Messaggio { 
    email: string;
    messaggio: string;
}

/* le interfacce permettono di definire un nuovo tipo di dato */

/* function inviaMessaggio(msg: Messaggio) {
    mailSender.sendTo(msg.email, msg.messaggio);

} */
/* la struttura di in */

/* possiamo definire una struttura con elementi opzionali */
interface neoMessaggio {

    email: string;
    nomeDestinatario?: string; //field opzionale, è accettato se è presente, ma non da errore se è assente
    oggetto?: string;
    messaggio: string;
}


/* le interfacce descrivono solo oggetti? 
no, le interfacce possono descrivere anche altri elementi del linguaggio */


/* esempio interfaccia che definisce una funzione */
/* #### dice i tipi in entrata e i tipi in uscita, poi la funzione  sarà di tipo "FunzioneSuNumeri" */
interface FunzioneSuNumeri { 
    (x: number, y: number): number; /* prendo due valori numerici e restituisco un numero */
}


var somma: FunzioneSuNumeri; //una funzione di tipo "FunzioneSuNumeri", cioè una funzione che ha la struttura base di sopra

somma = function (a: number, b: number) { 
    return a - b;
}

//anche interfacce che descrivono degli array
interface ArrayDiStringhe { 
    [index:number]:string //definisco il tipo dell'indice e il tipo del dato
}
var x: ArrayDiStringhe = ["uno", "due", "tre"];
//l'indice può essere anche di tipo string, per ordinare gli elementi come in un dizionario

/* esempio */

interface Dizionario{
    [index: string]: string;
}
var y: Dizionario; 
/* y["chiave1"] = "valore1";
y["chiave2"] = "valore2"; da errore eh!
 */
/* mentre gi indici possono avere solo tipo string o number,
le entrate possono avere qualunque tipo */

interface ArrayDiOggetti { 
    [index: number]: { id: number, label: string }; //a destra dico che l'oggetto deve avere i tali fields

}
//verificare se posso mettere altri fields 
class Scatolina { 
    id: number;
    label: string;
    nome: string = "pomodoriSottoOlio";
    constructor(id: number, label: string) { 
        this.id = id;
        this.label = label;
    }

}
let scatolaMetalloTrovataPocoFa = new Scatolina(22, "metallo");
var z: ArrayDiOggetti= [scatolaMetalloTrovataPocoFa];




