/* sintassi per inizializzare array */


//dichiarazione
let array_name: number[];



//come sempre una dichiarazione senza tipo di dato produce una variabile di tipo any
let mario;
mario = 3;
//mario = "carlo"; ->non segna errore

let gioacchino: string;
//gioacchino = 3;   ->segna errore 


/* esempi */


let alphas: string[];

alphas = ["1", "2", "3", "4"];

console.log(alphas[0]);

//posso inizializzare un array anche come istanza


let arr: number[] = new Array(4);

for (let i = 0; i < 4; i++) { 
    arr[i] = i + 1;
    console.log(arr[i]);
}


//array di stringhe

var arrStr: string[] = new Array("Mariella", "Carlino", "Gianfranco");

for (let e of arrStr) { 
    console.log(e);
}

//destrutturare un array
let p: number[] = [2, 3, 4];
let [x, y, z] = p;
/* ora le entrate di p stanno in x,y,z */


//array multidimensionali