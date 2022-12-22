/*
OSS PRELIMINARE:
Calcolerò i saldi sul prezzo aumentato con l'iva, dato che
le due operazioni IVA(p), S(p),
(la prima che restituisce il prezzo p aumentato dell'iva, la seconda
che restituisce p scontato) commutano.

LOGICA
1) Un'interfaccia Capo che contiene i fields fetchati dal JSON e rappresenta
   un capo d'abbigliamento

 
2) Una classe CalcolatoreCapi con 
 
 field ArrCapi: Capo[] ->viene caricato con i capi ottenuti dal JSON 
 metodi: getSaldoCapo, getAcquistoCapo -> fanno rispettivamente ciò che era richiesto nella consegna

3) una fuction che attacca gli EL alle CTA 

*/



//variabili che puntano ad elementi del DOM
let saldoCTA = document.getElementById("saldoCTA");
let prezzoCTA = document.getElementById("prezzoCTA");
let inputPerCodiceProdotto = document.getElementById("codProdInput");
let outputP = document.getElementById("out");


fetch("../starter/Abbigliamento.json")
  .then((response) => {
    if (response.ok) {
    }
    return response.json();
  })
  .then((response) => {
    console.log("response fetchata è: ", response);

    /*osserviamo che io ho fatto l'interfaccia Capo in modo che gli elementi dell'array response
        fossero interpretabili come valori di tipo Capo  */

    //inizializzazione
    let calcolatore = new CalcolatoreCapiInventario();
    calcolatore.load(response); //carico arrCapi
    

    console.log(calcolatore.getSaldoCapo(2121));
    console.log(calcolatore.getAcquistoCapo(2121));

    manageCTA(calcolatore);//invoco la function manageCTA

  })
  .catch((e) => {
    console.log(e);
  });

 
interface Capo {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
}

class CalcolatoreCapiInventario {
  //calcola le info richieste sui capi dell'inventario

  arrCapi: Capo[];
  constructor() {
    this.arrCapi = [];
  }

  load(response: Capo[]) {
    //prende la response fetchata e carica arrCapi

    response.forEach((e) => {
      let capo = <Capo>e;
      this.arrCapi.push(capo);
    });
  }

  getCapo(codprod: number): Capo | string {
    //ritorna un valore di tipo Capo

    let trovati = this.arrCapi.filter((e) => {
      return e.codprod === codprod;
    });
    if (trovati.length === 1) {
      return trovati[0];
    } else {
      return "capo non trovato";
    } //se ci sono più capi con tale codice, o se non ce ne sono--->da transformare in due casi distinti
  }

  getSaldoCapo(codprod: number): number | string {
    //ritorna il saldo del capo di cui hai inserito il codprod

    let capo = this.getCapo(codprod);

    if (typeof capo != "string") {
      return capo.saldo;
    } else {
      //caso in cui il capo non è stato trovato
      return "capo non trovato";
    }
  }

  getAcquistoCapo(codprod: number): number | string {
    //ritorna il costo del prodotto dopo aver applicato iva 22% e saldo (vedi r.1-5)

    let capo = this.getCapo(codprod);
    if (typeof capo != "string") {
      //capo trovato
      return Math.round(capo.prezzoivainclusa * (1 - capo.saldo * 0.01)*100)/100 ;
    } else {
      //caso in cui il capo non è stato trovato
      return "capo non trovato";
    }
  }
}

function manageCTA(calcolatore: CalcolatoreCapiInventario) {
  //attacca gli EL alle CTA per farli funzionare relativamente ai dati forniti dai metodi di un'istanza di CalcolatoreCapiInventario
  saldoCTA?.addEventListener("mousedown", function () {
    //gestisco CTA per ottenere saldo
    if (inputPerCodiceProdotto != null && outputP != null) {
      if (inputPerCodiceProdotto.value === "") {
        outputP.innerHTML = "errore, inserisci un codice prodotto";
      } else { //codice prodotto inserito
        let codProd = eval(inputPerCodiceProdotto.value);
        let capo = calcolatore.getCapo(codProd);
        if (typeof capo === "string") { //capo non trovato
          
          outputP.innerHTML = capo;
        } else {//codice prodotto corrispondente   
          outputP.innerHTML = `Il capo selezionato è un/una ${capo.capo}, e il saldo è del ${capo.saldo}%`;
        }
      }
    }
  });

  prezzoCTA?.addEventListener("mousedown", function () {
    if (inputPerCodiceProdotto != null && outputP != null) {
      if (inputPerCodiceProdotto.value === "") {
        outputP.innerHTML = "errore, inserisci un codice prodotto";
      } else { //codice prodotto inserito
        let codProd = eval(inputPerCodiceProdotto.value);
        let capo = calcolatore.getCapo(codProd);
        if (typeof capo === "string") {//se il capo non è stato trovato
          outputP.innerHTML = capo;
        } else { //codice prodotto corrispondente
       
          outputP.innerHTML = `Il capo selezionato è un/una ${capo.capo},
                     e il prezzo scontato e comprensivo di iva è: € ${calcolatore.getAcquistoCapo(
                       codProd
                     )}`;
        }
      }
    }
  });
}

