/* novità: parametri opzionali */


function disp_details(id: number, name: string, mail_id?: string) { //il "?" indica che il tale parametro è opzionale!

    console.log("ID: ", id);
    console.log("name: ", name);

    if (mail_id != undefined) {
        console.log("Email ID: ", mail_id);
     }
}

disp_details(11, "Carlino");
disp_details(22, "Mariello", "mariello.bello@gmail.com");

/* REST PARAMETERS -> inserire un numero arbitrario di parametri */
/* rest parameters ... in typescript -> they must be all of the same type */
/* example: */

function addNumbers(...num: number[]) {
    let sum: number = 0;
    for (let n of num) { 
        sum += n;
    }
    console.log("la somma è ", sum);
}


addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

//ricordiamo altra tecnica di dichiarazione di una funzione

let cammelina = function () { 
    console.log("ciao Mariello, completo so 100");
}