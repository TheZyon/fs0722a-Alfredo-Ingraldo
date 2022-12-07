salvaDato = function (info_da_salvare) { //mette nel local storage info_da_salvare
    localStorage.ultimo_pensiero = info_da_salvare;
    console.log("memorizzazione effettuata");
}
function recuperaDato(elemento_dove_lo_metto) { //mette in elemento.value, localStorage.ultimo_pensiero
    if (confirm("sostituire il contenuto attuale con l'ultimo ")){ 
        elemento_dove_lo_metto.value = localStorage.ultimo_pensiero;
    }
}

