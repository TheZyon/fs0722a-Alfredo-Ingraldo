"use strict";
//overloading di funzioni-->definire più funzioni con stesso nome ma argomenti diversi
//stessa idea chde c'è in JAVA
function somma(a, b) {
    if (typeof a === 'number' && typeof (b) != 'undefined') {
        return a + b;
    }
    else {
        return a[0] + a[1];
    }
}
