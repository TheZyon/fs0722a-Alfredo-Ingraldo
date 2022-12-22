"use strict";
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
let divArticoli = document.getElementById("articoliPrimoPiano")?.querySelector("div");
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
    for (let capo of calcolatore.arrCapi) {
        if (divArticoli != null && typeof (divArticoli) != "undefined") { //burocrazia
            divArticoli.innerHTML += `<div class="col-12 col-md-6 p-3 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
            <div id="discount-div" class="bg-danger text-warning"> 
                sconto ${capo.saldo}%
            </div>
            <img src="img/modellaScognita.jpg" class="card-img-top" alt="capo">
            <div class="card-body d-flex flex-column justify-content-center">
              <p class="card-text text-center nome">${capo.capo}</p>
              <p class="card-text text-center prezzo">€ ${capo.prezzoivaesclusa}</p>
              <button class="card-button rounded-pill bg-primary">Scopri Articolo</button>
            </div>
          </div>
        </div>`;
        }
    }
})
    .catch((e) => {
    console.log(e);
});
class CalcolatoreCapiInventario {
    //calcola le info richieste sui capi dell'inventario
    arrCapi;
    constructor() {
        this.arrCapi = [];
    }
    load(response) {
        //prende la response fetchata e carica arrCapi
        response.forEach((e) => {
            let capo = e;
            this.arrCapi.push(capo);
        });
    }
    getCapo(codprod) {
        //ritorna un valore di tipo Capo
        let trovati = this.arrCapi.filter((e) => {
            return e.codprod === codprod;
        });
        if (trovati.length === 1) {
            return trovati[0];
        }
        else {
            return "capo non trovato";
        } //se ci sono più capi con tale codice, o se non ce ne sono--->da transformare in due casi distinti
    }
    getSaldoCapo(codprod) {
        //ritorna il saldo del capo di cui hai inserito il codprod
        let capo = this.getCapo(codprod);
        if (typeof capo != "string") {
            return capo.saldo;
        }
        else {
            //caso in cui il capo non è stato trovato
            return "capo non trovato";
        }
    }
    getAcquistoCapo(codprod) {
        //ritorna il costo del prodotto dopo aver applicato iva 22% e saldo (vedi r.1-5)
        let capo = this.getCapo(codprod);
        if (typeof capo != "string") {
            //capo trovato
            return Math.round(capo.prezzoivainclusa * (1 - capo.saldo * 0.01) * 100) / 100;
        }
        else {
            //caso in cui il capo non è stato trovato
            return "capo non trovato";
        }
    }
}
