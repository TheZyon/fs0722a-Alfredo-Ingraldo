


//prende un array di oggetti, una chiave e un valore; ed elimina gli oggetti che hanno il valore nella chiave 
function trovaEdElimina(chiave, valore, array) { 
    let indice = array.findIndex((e) => e[chiave] == valore);
    array.splice(indice, 1);
    return array;
}
//oss che si è scritto e[chiave] e non e.chiave, perché così è consentita più "manipolabilità"


//altro modo usando FILTER

function trovaEdElimina2(chiave, valore, array) { 
    return array.filter((e) => e[chiave] != valore); //toglie dall'array tutti gli elementi e tali che e[chiave]!=valore
}



//giocare con i metodi : FILTER REDUCE SPLICE SEARCH replaceAll!!