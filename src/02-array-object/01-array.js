// ========== Arrays
// It's better to use const for an array to avoid issues in future during enumeration

const array = [1, 2, 3, 5, 8, 13, 21];
//const array = new Array(1, 2, 3, 5, 8, 12);
const arrayStrings = ['a', 'b', 'c', 'd'];
const arrayMixed = ['a', 1, true, undefined];   // it could contains everything

// console.log(array);
// console.log(arrayStrings);
// console.log(arrayMixed);

// console.log(array.length);           // get length of the array
// console.log(array[2]);               // get the 3rd item from the array as indexes start from 0
// console.log(array[array.length]);    // result is undefined because last index equals to length-1
// console.log(array[array.length-1]);  // result is the last item of the array

// Bad practice
// array[array.length] = 333;           // it will add a new value in the end of the array, but it's bad practice
// console.log(array[array.length-1])

// Cycle
// for(let i = 0; i < array.length; i++)
// {
//     console.log(array[i]);
// }

// for(let element of array)
// {
//     console.log(element);
// }

// array.forEach(element => {
//     console.log(element);
// });