//i generics si suano per indicare a FUNZIONI CLASSI INTERFACES il tipo di dato che si vuole usare 
//al momento della chiamata
//usi e benefici:
//si usano quando usiamo un tipo di dati in diversi punti,
//permettono di riutilizzare codice
//permettono di evitare uso id tipo any



/* function getArray(items: any[]): any[] {
//prende un array di tipo any e ritorna un array di tipo any ottenuto concatenando gli elementi dell'array di prima (pensati copme array)
    return new Array().concat(items);
}

let numberArray = getArray([[1, 2, 3], "mariello", ["carla", "giacomo"]]);
console.log(numberArray); */


/* uso generics */

function getArray<T>(items: T[]): T[] {
    //passo il tipo generico scrivendo <T>, lo uso per definire il tipo dell'argomento e del risultato
    return new Array<T>().concat(items);
}

//nella funzione getArray uso T 3 volte: 
// 1) specificare il tipo dei parametri,
// 2) specificare il tipo restituito dalla funzione
// 3) restituire il risultato
// 
// 
// per usare la funzione bassa passare il tipo specifico

var numberArray1 = getArray<number>([1, 2, 3]);

//il risulatto è di un tipo specifico->ho il controllo della specificità, muovendomi nella generalità

console.log(numberArray1);

/* se si omette la variabile di tipo quando si chiama la funzione, è ts a dedurla
se il tipo è semplice, ok, altrimenti ci mette any */


/* uso di più generics */


