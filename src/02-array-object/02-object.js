// ========== Objects
// It's much better to create an object as a const

const person = {
    firstName: 'Roman',
    lastName: 'Pro',
    age: 28,
    isProgrammer: true,
    languages: ['ua', 'en', 'ru', 'pl'],
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
// console.log(typeof person);
// console.log(person.firstName);
// console.log(person['firstName']);
// console.log(person.getFullName());

// const key = 'age';
// console.log(person[key]);

// console.log(person.firstName)
// person.firstName = 'Changed name'
// console.log(person.firstName)