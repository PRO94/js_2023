// ========== Functions
// two ways to work with functions:
 
// Function Expression - 'using only AFTER a function is written'
// const greet2 = function greet(name) {
//     console.log('Hello ', name)
// }

// greet('Roman')
// greet2('Roman')

// Function Declaration - 'using could be even before a function is written'
// function greet(name) {
//     console.log('Hello ', name)
// }

// console.dir(greet)  // Check all details about the function

// Execute some functionality after some time
// setTimeout(greet, 1500);    // Execute the function in 1.5 sec

// setTimeout(function() {
//     console.log('timeout')
//     greet('Roman')
// }, 2500)

// let timeout = setInterval(() => {
//     console.log('Exec every 2 sec')
// }, 2000);
// clearTimeout(timeout);  // stop the timeout even before it was run

// Example of usage: execute 5 times and after that stop the executing
// let counter = 0
// const interval = setInterval(() => {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++ counter)
//     }
// }, 1000);



// ========== Arrow Functions
// function greet(name) {
//     console.log('Hello ', name)
// }
// const arrowFunction = (name) => console.log('Hello ', name);    // or using with body and a few parameters
// arrowFunction('Roman');

// const pow = (num, exp) => Math.pow(num, exp);
// console.log(pow(2, 3));

// Default parameters - could be any value
// const sum = (a, b) => a + b;
// const sumUpd = (a = 0, b = 0) => a + b; 
// console.log(sum(2, 3));
// console.log(sum(2));    // Result NaN
// console.log(sumUpd(5, 1))  
// console.log(sumUpd(5)); // Result 5

// const sumAll = (...numbers) => numbers.reduce((accumulator, current) => accumulator += current);
// console.log(sumAll(1, 2, 3, 4, 5))  // Any amount of numbers



// ========== Closures - a function inside a function. But the inner function will have a permanent context of outer function
// function createPerson(firstName) {
//     return function(lastName) {
//         console.log(firstName + ' ' + lastName)
//     }
// }
// addLastName = createPerson('Roman');    // Result is a function with some scope where firstName is alway present there and we can't change it
// addLastName('Pro');

// Pure function - is a function that operates only with its internal parameters and doesn't depend on external ones