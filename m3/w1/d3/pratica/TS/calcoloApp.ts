import { IUser, lavoro, CalcoloAbs, CalcoloBasic } from "./calcolo";

let utente = <IUser>{};

utente.name = sessionStorage.getItem("1_fieldUtente");
utente.codRedd = eval(sessionStorage.getItem("2_fieldUtente"));
utente.redditoAnnuoLordo = eval(sessionStorage.getItem("3_fieldUtente"));
utente.tasseInps = sessionStorage.getItem("4_fieldUtente");
utente.tasseIrpef = eval(sessionStorage.getItem("5_fieldUtente"));
utente.lavoro = sessionStorage.getItem("lavoro");


//mettere controlli....
console.log(utente.lavoro);
console.log(utente.tasseInps)
console.log(utente.tasseIrpef)
console.log(utente.redditoAnnuoLordo)


let calcolo = new CalcoloBasic(utente);

let btnTasse = document.getElementById("utileTasse");
let btnInps = document.getElementById("tasseInps");
let btnIrpef = document.getElementById("tasseIrpef");
let btnRedditoNetto = document.getElementById("redditoAnnualeNetto");
let out = document.getElementById("out");

class GestoreCTA { 

    tasse(){ 
        out.innerHTML= calcolo.getUtileTasse();
    }
    tasseIrpef() { 
        out.innerHTML=calcolo.getTasseIrpef();
    }
    tasseInps() { 
        out.innerHTML= calcolo.getTasseInps();
    }
    reddito() { 
        out.innerHTML=calcolo.getRedditoAnnualeNetto();
    }
       
}

let gestoreCTA = new GestoreCTA();

btnTasse?.addEventListener("mousedown", gestoreCTA.tasse);
btnInps?.addEventListener("mousedown", gestoreCTA.tasseInps);
btnIrpef?.addEventListener("mousedown", gestoreCTA.tasseIrpef);
btnRedditoNetto?.addEventListener("mousedown", gestoreCTA.reddito);



/* 
lavoro
: 
"Avvocato" */