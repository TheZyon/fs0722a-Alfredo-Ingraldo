//casting
var a = "5";
a = Number(a); //adesso è un numero

var anni = prompt("quanti anni hai?") || 18; //operatore che mette 18 in anni se l'utente non scrive nulla nel prompt;
if (anni >= 18 && anni <= 110) {
    document.write("maggiorenne");
} else if (anni > 110) {
    document.write("sei antico");
}
else {
    location.href="https://www.youtube.com/watch?v=vJ2wcmfpcWo";
}