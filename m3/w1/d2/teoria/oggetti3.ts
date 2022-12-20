/* getters e setters */
/* i getters si utilizzano per 
ottenere dei dati senza che si debbano mettere nel costruttore, ad esempio dei dati ottenuti modificando i fields*/
/* i setters si utilizzano per modificare dei dati interni all'oggetto , dall'esterno */
class Uomo { 
    nome: string;
    cognome: string;
    
    constructor(nome:string, cognome:string) { 
        this.nome = nome;
        this.cognome = cognome;   
    }

    get nomeCompleto(): string { 
        return this.nome + ' ' + this.cognome;
    }
    get giovannetta() { 
        return "ullallalla questo è il ballo del moscerino";
    }
    set nomeCompleto(valore: string) { 
        let parti = valore.toString().split(" ");
        this.nome = parti[0];
        this.cognome = parti[1];
    }
}


var mariello = new Uomo("Mariello", "Bello");

console.log(mariello.nomeCompleto);
//per far funzionare i getters bisogna lanciare un: tsc oggetti3.ts --target ES5 
//l'aggiunta di --target ES5 permette di farlo funzionare
mariello.nomeCompleto = "Carlino Maggino"; //uso il setter
//riprovo il getter adesso
console.log(mariello.nomeCompleto, mariello.giovannetta);




