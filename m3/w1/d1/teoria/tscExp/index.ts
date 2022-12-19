let x: number = 22; //tipizzazione

class Puttana { //classe

    name: string;

    constructor(name: string) { 
        this.name = name;
    }
}

let mariella = new Puttana("mariella");

console.log(mariella.name);


/* tipi:
number, string,
null, undefined

any --> il jolly, una variabile di tipo any può contenere di tutto, come in js
tipo oggetto: es. maria: Puttana;
*/

let maria: Puttana = new Puttana("maria");

/* very smart computations */

let y: number = 11;

let z = x + y;

console.log("tipo di z: ",typeof (z));

let code: any = 123;

let contoPiFariASpisa = <number>code; //casting

console.log(typeof(contoPiFariASpisa));

//inferred typing ---> typescript deduce il tipo a partire dal valore
// esempio:
let cammelo= 123;
console.log("tipo di cammelo", typeof (cammelo)); //printa "number"
//ovviamente il tipo resta quello della prima definizione della variabile.




/* keyword static serve ad accedere ai fields di una classe 
(variabili dichiarate in una classe ma fuori dai metodi, hanno scope=class, 
quindi non vi si può accedere da fuori della classe) dalla classe,


ai fields non static si può accedere dalle istanze della classe */


class Num { 
    static valStatic = 33;    //static field
    val = 11;                   //field
    storeNum(): void {
        let val = 22;       //variabile locale --->non vi si può accedere da fuori
    }
}
console.log(Num.valStatic); //viene stampato
//console.log(Num.val);  da errore perché il field non è static

let numerino = new Num();
console.log(numerino.val); //lo stampa perchè lo prendo da una istanza




/* PROCESSI DECISIONALI */



