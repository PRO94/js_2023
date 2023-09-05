// ========== Objects - details
const person = { 
    name: 'Roman',
    age: 28,
    isDeveloper: true,
    languages: ['ua', 'en', 'pl', 'ru'],
    address: {
        country: 'Poland',
        city: 'BB'
    },
    'complex key': 'some complex data',
    [1 + 2]: 'computed value',
    ['key_year_' + new Date().getFullYear()]: 'Current year data',
    greet() {
        console.log('Hi. I\'m ' + this.name);
    },
    /// 'this' is arrow function of an object is 'window'. Arrow function doesn't create its own context
    testArrowFunc: () => console.log(`I can't work with 'this' and a context of the object`),
    info() {
        console.log(this.name)
    }
}
// console.log(typeof person)  // object
// console.log(person['complex key']);
// console.log(person[3]);
// const currentYear = new Date().getFullYear();
// console.log(person[`key_year_${currentYear}`]);
// person.greet();
// person.testArrowFunc();
// person.info();

// remove some value from the object
// person.address = undefined
// console.log(person)

// remove some key from the object
// delete person.address
// console.log(person)

// Destructuring
// const name = person.name;
// const age = person.age;
// const languages = person.languages;
// const {name, age, languages} = person; // we take only these 3 values from the object
// const {name:firstName, age, languages} = person; // we take 'name' from the object and call it 'firstName'
// const {name:firstName = 'defaultValue', age, languages} = person; // use default value if it is undefined in the object
// console.log(firstName)

// Iteration object properties - only its own properties, without the prototype
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key, person[key])
//     }
// }

// All the info about the Object class
// console.dir(Object);

// const objKeys = Object.keys(person);
// console.log(objKeys);

// Prototype methods will be used here as well.
// Object.keys(person).forEach(key => {
//     console.log(person[key])
// })

const logger = {
    keys(withText = true) {
        if (withText) {
            console.log('Object keys', Object.keys(this))
        } else {
            console.log(Object.keys(this))
        }
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log('Key:', key, 'Value:', this[key])
        })
    }
}

// const boundObj = logger.keys.bind({a:1});    // bind without executing
// boundObj();
// logger.keysAndValues.bind(person)();    // short version of usage

// logger.keys.call(person, false);        // it executes immediately
// logger.keys.apply(person, [false]);     // it executes immediately