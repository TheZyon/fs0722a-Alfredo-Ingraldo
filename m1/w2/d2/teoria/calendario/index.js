let trArray= document.querySelector("table");
for (i = 0; i < 25; i++) {
    let riga_i = trArray.children[2].children[i];
    riga_i.children[0].innerHTML = `${i+1}`;
}




function guadagnoGiornata(giorno){ 
    let guadagno = 0;
    let nRigheBody = giorno.children[2].children.length;
    for (i = 0; i < nRigheBody; i++) { 
        let riga_i=giorno.children[2].children[i]
        if (giorno.children[2].children[i].children.innerHTML != '') { 
            guadagno += 15;
        }
    }
    console.log(guadagno);
}

function creaGiorno(){ //crea un'altra tabella mettendo solo la thead
    document.querySelector("body").appendChild(document.createElement("table"));
    let tabelle = document.querySelectorAll("table");
    let nTabelle = tabelle.length;
    tabelle[nTabelle - 1].innerHTML = "<caption>Lunedì</caption><thead><tr><th>Ora</th><th>Evento</th></tr></thead>";
}

function inserisciEvento(evento, giorno) {
    let size = giorno.children[2].children.length;
    giorno.children[2].appendChild(document.createElement("tr"));
    
    let trCorrente = giorno.children[2].children[size];
    trCorrente.appendChild(document.createElement("td"));
    trCorrente.appendChild(document.createElement("td"));
    trCorrente.children[1].innerHTML = evento;
}

inserisciEvento("Cammelo", trArray);
guadagnoGiornata(trArray);


