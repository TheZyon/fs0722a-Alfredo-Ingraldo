class Persona { 
    nome: string; /* fields */
    cognome: string;
    constructor(nome: string, cognome: string) { //costruttore
        this.nome = nome;
        this.cognome = cognome;
    }
    visualizzaNomeCognome() { //metodo
        return this.nome +' '+ this.cognome;
    }
}

//altro esempio

class Car { 
    engine: string;
    static nome: string = "Carmelina";
    constructor(engine: string) { 
        this.engine = engine;
    }

    disp(): void{
        console.log("Engine is: " + this.engine);
     }
}
//nei metodi non si usa la keyword "function"
// negli oggetti i fields si separano con la visgola, 
// nelle classi con il punto e virgola



console.log("ecco mr.Craig, questa è la: ", Car.nome);
let car = new Car("Ferarri");

car.disp();

/* inizializzare i fields dopo la istanziazione & private & metodi statici */

class Billo { 
    lunghezza: number = -1;
    private visualizzaLunghezza() { //con private non vi is può accedere dall'esterno della classe
        return this.lunghezza;
    }
    static printaStemmaBillo() { //si può usare senza istanziare Billo
        console.log("8----->");
    }
}

let billino = new Billo();
billino.lunghezza = 12;

console.log("il billino misura: ", billino.lunghezza);

Billo.printaStemmaBillo();


/* estendere una classe */

class Shape { 
    area: number;
    constructor(a: number) { 
        this.area = a;
    }
}

class Circle extends Shape { //eredita fields e metodi
    disp(): void { 
        console.log("Area of the circle is: " + this.area);
    }
}

new Circle(22).disp();


//extends multilivello
class Root { 
    str: string;
    constructor(str: string) { 
        this.str = str;
    }
}

class Child extends Root{ }
class Leaf extends Child { }

let leaf = new Leaf("foglioletta piccina");

console.log(leaf.str);