// ========== Class, inheritance

class Human {
    static isHuman = true;  // cann't get access on obj level. Only class level

    constructor(isOld) {
        this.isOld = isOld;
    }
}

class Person extends Human {
    constructor(name, age) {
        super(age >= 18 ? true : false);        // call parrent constructor (Human)
        this.name = name ?? 'Undefined name';
        this.age = age ?? 'Undefined age';
    }

    hayHelloAndSomething(something) {
        console.log(`Hi. I'm ${this.name}. I'm ${this.age} years old. I can say: ${something}`)
    }
}

// const emptyPerson = new Person();
const person = new Person('Roman', 18);
// console.log(emptyPerson)
// console.log(person)

// person.hayHelloAndSomething('how are you?');

// console.log(person.isOld);
// console.log(person.isHuman);    // Undefined
// console.log(Human.isHuman);
