

let person = {
    firstname: "Federico",
    lastname: "De Rosi",
    sayHello: function () { } //type template --> dichiarazione metodo
}

console.log(person.firstname); //ok

person.sayHello = function () { //definizione del metodo, va bene anche fuori dall'oggetto
    console.log("I'm a hello kitty, my name is: " + person.firstname);
}

person.sayHello();


//usare un oggetto come parametro di una funzione

function invokePerson(obj: { firstname: string, lastname: string }) {
    console.log("first name is: ", obj.firstname);  
    console.log("last name is: ", obj.lastname);
}
 
invokePerson(person);

