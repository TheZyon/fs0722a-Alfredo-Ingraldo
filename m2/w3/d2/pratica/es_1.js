class Person { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    confrontoEta(p) {
        let etaAltraPersona = p.age;
        if (etaAltraPersona > this.age) {
            return `${p.name} è più vecchio di ${this.name}`;
        }
        else { return `${this.name} è più vecchio di ${p.name}`;}
     }
}

let p1 = new Person("Carlino", 33);
let p2 = new Person("Mariello", 44);
let p3 = new Person("Giovannillo", 55);

console.log(p1.confrontoEta(p2));
console.log(p2.confrontoEta(p1));