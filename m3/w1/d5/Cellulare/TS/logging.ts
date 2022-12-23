import { SmartPhone, GestioneDatiUtente, testo} from "./classi";

//variabili per elementi del DOM 
let inp = document.getElementById("id");

let inserisciIdCTA = document.getElementById("inserisci");
let divFond = document.getElementById("container");
console.log(divFond);
let utente: SmartPhone;
let gestione = new GestioneDatiUtente();


inserisciIdCTA?.addEventListener("mousedown", function () {
    
    if (inp != null) {
        let u = gestione.pescaUtente(inp.value);
        if (typeof (u) != 'string') {
            utente = u;
            if (divFond != null) { //carica le opzioni la gestione dell'account

                //aggiorno dom con campi di input per gestione account
                divFond.innerHTML = testo;

                //variabili nuovi elementi del dom
                let ricaricaInp = document.getElementById("ricaricaInp");
                let chiamataInp = document.getElementById("chiamataInp");
                let numero404Inp = document.getElementById("numero404Inp");
                let numeroChiamateInp = document.getElementById("numeroChiamateInp");
                let azzeraChiamateInp = document.getElementById("azzeraChiamateInp");
                let out = document.getElementById("out");

                //metto le CTA
                 ricaricaInp.querySelector("button")?.addEventListener("mousedown", function () {
                    let value = eval(ricaricaInp.querySelector("input").value);
                    utente.ricarica(value);
                    console.log(utente.carica);
                    gestione.salvaUtente(utente, utente.id);
                   
                
            });
        
                chiamataInp.querySelector("button")?.addEventListener("mousedown", function () { 
                    let value = eval(ricaricaInp.querySelector("input").value);
                    utente.chiamata(value);
                    console.log(utente.carica);
                    gestione.salvaUtente(utente, utente.id);
                });

                numero404Inp.querySelector("button")?.addEventListener("mousedown", function () {
                    if (out != null) {   out.innerHTML = `possiedi: ${utente.carica}`; }else { 
                        console.log("out not found in dom");
                    }
                    

                });
                
                numeroChiamateInp?.querySelector("button")?.addEventListener("mousedown", function () { 
                    if (out != null) {   out.innerHTML = `hai fatto: ${utente.numeroChiamate} chiamate`; }else { 
                        console.log("out not found in dom");
                    }
                });

                azzeraChiamateInp?.querySelector("button")?.addEventListener("mousedown", function () { 
                    utente.numeroChiamate = 0;
                    gestione.salvaUtente(utente, utente.id);
                });


            
            
            
            
            }
                
                
                
            }
            else { console.log("divFond not found in DOM"); }
        }
        else { console.log(u); }
    }
    
);