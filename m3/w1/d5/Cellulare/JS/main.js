import { GestioneDatiUtente, } from "./classi.js";
//variabili per elementi del DOM creaUtente.html
let ctaCrea = document.getElementById("crea");
let out = document.getElementById("out");
let inputNomeCompagnia = document.getElementById("nomeCompagnia");
let inputUsername = document.getElementById("usernameUtente");
let inputContratto = document.getElementById("tipoContratto");
ctaCrea?.addEventListener("mousedown", function () {
    if (inputNomeCompagnia != null && inputUsername != null && inputContratto != null && out != null) {
        let utente = {
            carica: 0,
            numeroChiamate: 0,
            nomeCompagnia: inputNomeCompagnia.value,
            usernameUtente: inputUsername.value,
            tipoContratto: inputContratto.value
        };
        let gestione = new GestioneDatiUtente();
        out.innerHTML = gestione.salvaUtente(utente);
    }
    else {
        console.log("problema nel prendere gli elementi del dom");
    }
});
