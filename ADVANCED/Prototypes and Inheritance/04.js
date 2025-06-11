function extendPrototype(classToExtend) {
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
}

extendPrototype(Person);

const p = new Person("Alice", "alice@mail.com");

console.log(p.toSpeciesString());