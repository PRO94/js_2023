// ========== Array methods
// Full documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// const names = ['Roman', 'John', 'Benny'];
// const letters = ['c', 'a', 'z', 'b', 'h']

// names.push('Lara');             // Add to the end of the array

// names.unshift('Klara');         // Insert into the first position of the array. Slower that push, rebuild the whole array with indexes.

// var firstItem =  names.shift(); // Remove first item from the array and return the removed item

// var lastItem = names.pop();     // Remove last item from the array and return the removed item

// names.reverse()                 // Reverse the array a,b,c => c,b,a. The array will be changed/mutated.

// var newArray = names.toReversed();  // Return a copy of reversed array. Original won't be mutated.
// console.log(newArray);

// letters.sort();                     // Sort the array alphabetically. Mutate the array.
// console.log(letters);

// It's possible to set any custom function for comparing two items (objects, strings, numbers etc.)
// It will mutate/change the original array
// letters.sort(function(a, b) {
//     return a.charCodeAt(0) - b.charCodeAt(0);   // ascending
//     //return b.charCodeAt(0) - a.charCodeAt(0);   // descending 
// })

// let index = 2;
// names.splice(index, 1);              // Remove 1 item starting from the index. Mutate the array.

// let index = 2;
// names.toSpliced(index, 1);           // Return a copy of array with removed 1 item starting from the index. Do not mutate the original array.

// const someName = 'John';
// const index = names.indexOf(someName);  // Return an index of the item in case if the item exists in the array. Result = -1 if the value doesn't exit in the array.
// var johnName = names[index];

// const updatedNames = names.with(index, 'Big John'); // Update a value in the array to a new one ('Big John');
// console.log(updatedNames)

// Iterate all the items of the array and update/trasform/act all of them with some function
// The method will always return a new array
// const updatedNames = names.map(function(name) {
//     const updatedName = name + '!';
//     return updatedName;
// })
// const updatedNames = names.map(name => {    // Second way how to write a function inside
//     const updatedName = name + '!';
//     return updatedName;
// })
// const updatedNames = names.map((name, index) => {    // Additionaly we can get indexes and work with them
//     const updatedName = name + '!';
//     console.log(index)
//     return updatedName;
// })
// console.log(names)
// console.log(updatedNames)

// console.log(names.includes('John'))     // Return true/false if the item exists in the array
// Aflternative is usage: console.log(names.indexOf('John') !== -1)