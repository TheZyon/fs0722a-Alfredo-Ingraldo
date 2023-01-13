"use strict";
function verificaTuttiDiversi(arr) {
    if (arr.length > 0) {
        //caso array non vuoto
        for (let u of arr) {
            if (arr.indexOf(u) < arr.lastIndexOf(u)) {
                //se ci sono due copie di u in arr
                return false;
            }
        }
    }
    return true;
}
function generaRndSenzaPrecedenti(arr) {
    let condition = false;
    let out = -1;
    while (!condition) {
        let newRnd = Math.round(Math.random() * 12);
        let testArr = arr;
        testArr.push(newRnd);
        console.log("testArray: ", testArr);
        console.log("verifica: ", verificaTuttiDiversi(testArr));
        if (verificaTuttiDiversi(testArr)) {
            return newRnd;
        }
    }
    return out;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(generaRndSenzaPrecedenti(arr));
