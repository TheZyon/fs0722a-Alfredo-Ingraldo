
/* 

Interfacce riassunto:

1) per tipi customizzati
2)per dare struttura base per oggetti che implementano, o per altre interfacce che estendono

*/

interface IPerson { 
    firstname: string,
    lastname: string,
    sayHi: () => string //scrittura arrow function per indicare i tipo 
}

//si può passare direttamente all'istanza da una interfaccia --->caso 1) quando 
//l'interfaccia serve a dare il tipo customizzato

var customer: IPerson = {
    firstname : "Mariello",
    lastname : "Bello",
    sayHi: (): string=> { return "Hi there handsome"; } //attenzione a questa notazione!!!!
}

interface Person { 
    age: number; 
}

interface Musician extends Person { 
    instrument: string;
}

var drummer = <Musician>{}; //istanza dell'interfaccia Musician

drummer.age = 22;
drummer.instrument = "Batteria";





