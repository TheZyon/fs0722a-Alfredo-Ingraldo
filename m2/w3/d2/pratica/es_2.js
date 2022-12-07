
let tbody = document.querySelector("tbody");

let ctaArray = document.getElementsByTagName("a");//array delle call to action
//id della prima riga che compare
//i dati della paginazione: items e pageSize
let items = [
    
    { id: 1, nome: 'Giustino', cognome: 'Cavalli', classe: 'A' },
    { id: 2, nome: 'Ilona', cognome: 'Puppesku', classe: 'A' },
    { id: 3, nome: 'Batuffolo', cognome: 'Da Grembo', classe: 'A' },
    { id: 4, nome: 'Fuffi', cognome: 'Collarizzato', classe: 'A' },
    { id: 5, nome: 'Elettra', cognome: 'Bochiny', classe: 'A' },
    { id: 6, nome: 'Maria', cognome: 'Di Dio', classe: 'A' },
    { id: 7, nome: 'Bene', cognome: 'Venuto', classe: 'A' },
    { id: 8, nome: 'Uccelletto', cognome: 'Da Gabbietta', classe: 'A' },
    { id: 9, nome: "Cammielo", cognome: "Russu", classe: 'A' },
    { id: 10, nome: "Mariello", cognome: "Troietti", classe: 'A' },
    { id: 11, nome: "Nicole", cognome: "Minnetti", classe: 'A' },
    { id: 12, nome: "Maria 2°", cognome: "Di Dio", classe: 'A' },
  
    
];

pageSize = 2;

class Paginazione { 
    constructor(items, pageSize) {
        this.items = items;
        this.pageSize = pageSize;
        
    }
  
    clear() { //pulisce il tbody
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