var html = "<div class=\"prova\"> carmelo </div>"; // \" è l'escape che serve per inserire le virgilette in una stringa
console.log(html);
//altra tecnica: interpolazione anche detta template string

var nome = "mario";
console.log("benvenuto " + nome + ", come stai?");

//back tick si ottiene alt + 9: ``
//altro modo usando il back tick

console.log(`benvenuto caro ${nome} in Italia`);



//HOISTING
console.log(mariella); //da undefined perchè ancora non lo vede
var mariella = 2;
console.log(Cammelo); //da errore perchè, dopo aver controllato se la variabile esiste, vede che non c'è
//nel caso di mariella, dopo aver controllato se la variabile esiste (hoisting)
//da undefined
