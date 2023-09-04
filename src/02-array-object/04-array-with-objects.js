// ========== Array with objects, practice
const people = [
    { name: 'Roman', age: 29, money: 6000 },
    { name: 'John', age: 36, money: 15000 },
    { name: 'Max', age: 25, money: 3000 },
    { name: 'Mary', age: 17, money: 100 },
    { name: 'Helen', age: 27, money: 4000 }
]

// const foundPerson = people.find(person => {
//     if (person.age === 29)
//         return true;        // or: return person.age === 29;
// })
// const foundPerson = people.find(p => p.age === 29); // short version
// console.log(foundPerson) 

// Find index - return an index of item if it exists in the array
// const foundPersonIndex = people.findIndex(person => {
//     return person.age === 29;
// })
// console.log(foundPersonIndex);

// Filter with some function
// const filteredPeople = people.filter(function(person) {
//     return person.age < 18;
// })
// const filteredPeople = people.filter(p => p.age < 18); // short version
// console.log(filteredPeople)

// Example of usage 1:
// let sumMoney = 0;
// const filtered = people.filter(person => {
//     return person.age >= 18;
// })
// console.log(filtered);
// filtered.forEach(person => {
//     sumMoney += person.money;
// })
// console.log('Total money in people 18+:', sumMoney );

// Optimized example 1:
// const sumMoney = people
//     .filter(p => p.age >= 18)
//     .map(p => p.money)
//     .reduce((acc, p) => acc + p , 0);
// console.log('Total money in people 18+ (optimized):', sumMoney);

// Optimized 2 example 1:
// const byAge18Plus = (p) => p.age >= 18;
// const pickMoney = (p) => p.money;
// const sumMoney = people
//     .filter(byAge18Plus)
//     .map(pickMoney)
//     .reduce((acc, p) => acc + p , 0);
// console.log('Total money in people 18+ (optimized 2):', sumMoney);

// Example - manipulating with string
// const string = 'Hi, how are you, dude?'
// const reversedString = string
//     .split('')
//     .reverse()
//     .join('!')
//     .split('')
//     .filter(c => c !== '!')
//     .join('')
// console.log(reversedString);