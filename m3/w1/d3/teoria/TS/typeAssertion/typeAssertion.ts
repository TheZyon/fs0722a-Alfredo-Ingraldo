//Type assertion -> imposta il tipo di un valore e dice al compilatore di non inferirlo (= non modificarlo)
//le usiamo quando abbiamo una comprensione migliore del tipo di dato rispetto a ciò che TS deduce

let code: any = 123;

let employeeCode = <number>code; //adesso in employee code c'è un dato di tipo number

//è praticamente il casting delle variabili.

let patologia = <any>employeeCode;
console.log(typeof(patologia));

interface Employee { 
    name: string;
    code: number;
}

let giacomo = <Employee>{}; //dichiarazione variabile di tipo Employee
giacomo.name = "Giacomo";
giacomo.code = 12345;