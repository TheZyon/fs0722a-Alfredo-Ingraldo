
let tbody = document.querySelector("tbody");

let ctaArray = document.getElementsByTagName("a"); //array delle call to action
//id della prima riga che compare
//i dati della paginazione: items e pageSize
let items = [
    { id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A' },
    { id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A' },
    { id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A' },
    { id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A' },
    { id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A' },
    { id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A' },
    { id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A' },
];

pageSize = 2;

class Paginazione { 
    constructor(items, pageSize) {
        this.items = items;
        this.pageSize = pageSize;
        
    }
  
    clear() { //pulisce tabella
        tbody.innerHTML = "";
    }

    impaginaPrimi() { //mostra nella tabella i primi pageSize-elementi di items
        this.clear();
        items.forEach((el, index) => {
            if (index < this.pageSize) {
                this.aggiungiElemento(el);
            }
        });
    }

    aggiungiElemento(el) { //inserisce i dati di el nella tabella
        tbody.innerHTML += `<tr><td>${el.id}</td><td>${el.nome}</td><td>${el.cognome}</td><td>${el.classe}</td></tr>`;
    }
   
    showFrom(start) { //mostra tutti gli elementi di items con indice tra start>=0 e (start + pageSize -1)
        
        if (start <= items.length - this.pageSize) {//partendo da start abbiamo almeno pageSize-elementi da mostrare }
            
            this.clear(); //ripulisco tabella

            items.forEach((el, index) => {
                if (index >= start && index < start + this.pageSize) {
                    this.aggiungiElemento(el);
                }
            });

        } else { console.log("errore: start troppo grande", start); }
    }
    
}


let paginazione = new Paginazione(items, pageSize);
paginazione.impaginaPrimi();

ctaArray[0].addEventListener('mousedown', function () { paginazione.impaginaPrimi();});
ctaArray[1].addEventListener('mousedown', function () { let cavalloPrimo=tbody.children[0].children[0]; paginazione.showFrom(eval(cavalloPrimo.innerHTML) - pageSize - 1);});
ctaArray[2].addEventListener('mousedown', function () { let cavalloPrimo=tbody.children[0].children[0]; paginazione.showFrom(eval(cavalloPrimo.innerHTML) + pageSize - 1);});
ctaArray[3].addEventListener('mousedown', function () { paginazione.showFrom(items.length - pageSize);});
