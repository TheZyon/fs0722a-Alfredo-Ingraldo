/* le enumerazioni (enum) ci permettono di definire un insieme di costanti 
le usiamo per ordinare dei dati oppure per creare una serie di casi */

enum StatusCodes { 
    notFound = 404,
    success = 200,
    accepted = 202,
    badREquest = 400
}

console.log(StatusCodes.notFound);
console.log(StatusCodes.success);

