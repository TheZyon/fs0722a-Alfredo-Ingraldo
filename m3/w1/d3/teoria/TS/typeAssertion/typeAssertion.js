//Type assertion -> imposta il tipo di un valore e dice al compilatore di non inferirlo (= non modificarlo)
//le usiamo quando abbiamo una comprensione migliore del tipo di dato rispetto a ciò che TS deduce
var code = 123;
var employeeCode = code; //adesso in employee code c'è un dato di tipo number
//è praticamente il casting delle variabili.
var patologia = employeeCode;
console.log(typeof (patologia));
