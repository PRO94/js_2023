let num = 32;               // number
let str = "hello string";   // string
const isPersistent = true;  // constant

console.log("\nBefore changes:");
console.log(num, str, isPersistent);

num = 43;
str = 'changed';
//isPersistent = false;       // error - impossible to change const

console.log("\nAfter changes:");
console.log(num, str, isPersistent, '\n');

/*
// What can we do with variables?
let $ = 'test';
let $num = 44;
let num$ = 22;
let _ = 49;
let _num = 23;
let num_ = 32;
let first_name = 'Roman';   // Snake Case style
let myNum = 12;             // Camel case style
let LastName = 'Pro';       // Pascal case style
*/

/*
// Restrictions with variables
let 23num = 23;           // variable name can't start with a number
let my-num = 12;          // can't use '-' in a variable name
let false = 'text';       // can't use reserved words as a variable name
*/

