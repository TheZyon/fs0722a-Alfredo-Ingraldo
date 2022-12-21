//type_custom descrive un valore che può essere di tipi diversi
//si usa quando un valore non è sotto il nostro controllo -->meglio di any perchè
// con type_custom si riducono i tipi possibili che la variabile può assumere
var multitype;
multitype = 20; //ok
multitype = true; //ok
/* multitype = "Cammelino"; //NO */
/* esempio pratico: ho un metodo che, se riceve numeri fa una cosa , se riceve stringhe fa un'altra cosa */
//ho valori che possono essere numeri o stringhe;
// funzione con due parametri: 
// se sono numeri li somma
// se sono stringhe le concatena
// altrimenti errore
function add(x, y) {
    if ((typeof (x) === 'number' && typeof (y) === 'number')) {
        return x + y;
    }
    else if (typeof (x) === 'string' && typeof (y) === 'string') {
        return x + y;
    }
    else {
        return "errore";
    }
}
console.log(add(1, 1));
console.log(add("mario", " rossi"));
console.log(add(11, "settembre"));
