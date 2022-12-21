/*  interfacce 
    ->servono per definire tipi personalizzati in TS
    ->sorta di vincolo, fissa come un oggetto può interagire con un altro



interface IPersona { 
    nome: string;
    cognome: string;
    visualizzaNomeCognome(): string;
}

//una classe che vuole interagire con l'interfaccia (che IMPLEMENTA) deve "aderire" alla struttura
//esempio:
class Persona implements IPersona{
    nome: string;
    cognome: string;

    constructor(nome: string, cognome: string) { 
        this.nome = nome;
        this.cognome = cognome;
    }

    visualizzaNomeCognome():string { 
        return this.nome + this.cognome;
    }
}

interfacce: due usi--->
1. definire tipi customizzati con caratteristiche essenziali; 
2. dare una struttura base (con metodi non esplicitati) che viene poi implementata in classi 



enum Materie { Storia, Informatica, Geografia, Filosofia, Latino, Matematica };
class Studente implements IPersona{ 

    nome: string;
    cognome: string;


    //aggiungo fields
    materie: Materie[]; //array che può contenere elementi dell'enum Materie

    constructor(nome: string, cognome: string) { 
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
    }

    visualizzaNomeCognome(): string { 
        return this.nome +" "+ this.cognome;
    }
}
 */


/* si possono implementare più interfacce contemporaneamente */
enum Materie { Latino, Matematica };

interface IPersona { 
    nome: string;
    cognome: string;
    visualizzaNomeCognome(): string;
}
interface IStudio { 
    materie: Materie[]; //array di cose che possono essere solo di tipo Materie
}

class Studente implements Ipersona, IStudio { 
    nome: string;
    cognome: string;

    materie: Materie[];
    constructor(nome: string, cognome: string) { 
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
    }

    visualizzaNomeCognome() { 
        return this.nome + " " + this.cognome;
    }
}

/* un'interfaccia può essere estesa da un'interfaccia 
in tal caso si usa EXTENDS */

interface preLavoratore extends IPersona { 
    nome: string;
    cognome: string;
    
    //altri Fields
    mesiDisoccupazione: number;
    percettoreRedditoCittadinanza: boolean;

    visualizzaNomeCognome(): string;
    attaccoDiPanico(): void;

    
}