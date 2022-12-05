//elementi del form
let nome = document.querySelector("form").children[0];
let cognome = document.querySelector("form").children[1];
let data = document.querySelector("form").children[2];
let cta = document.querySelector("form").children[3];

//elementi della tabella
let tbody = document.querySelector("tbody");

function Persona(nome, eta) {
  this.nome = nome;
  this.eta = eta;
}

cta.addEventListener("mousedown", function () { 
    inserisciUtente(creaUtente());
});



function inserisciUtente(utente) {
  //riceve l'oggetto utente e inserisce i suoi dati nella tabella
  appendTrow(utente.nome, utente.eta);
}


function creaUtente() {
    let utente = new Persona(
      nome.value + " " + cognome.value,
      numeroAnni(data.value)
    );
    return utente;
}
  
/* funzioni ausiliarie */


//function che restituisce il numero di anni passati
//dall'argomento data
function numeroAnni(data) {

    let dataObj = new Date(data);
    let dataOggi = new Date();
    let millisec = dataOggi.getTime()-dataObj.getTime() ; //tempo in millisecondi tra la prima data e la seconda
    //trasformo millisecondi trascorsi in anni
    let anni = millisec * Math.pow(10, -3) * Math.pow(60, -1) * Math.pow(60, -1) * Math.pow(24, -1)*Math.pow(365,-1); //gli anni che che sono passati
    
    return Math.floor(anni);
} 

//function che aggiunge una riga alla tabella
function appendTrow(nome, eta) {
  let tr = document.createElement("tr");
  let td_1 = document.createElement("td");
  let td_2 = document.createElement("td");

  td_1.innerText = nome;
  td_2.innerText = eta;
  tbody.appendChild(tr);
  tr.appendChild(td_1);
  tr.appendChild(td_2);
}
