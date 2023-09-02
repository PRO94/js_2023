const fullAge = 28;
const birthYear = 1994;
const currentYear = 2023;

const isFullAge = currentYear - birthYear >= fullAge;
//console.log(isFullAge);

const num1 = 33;
const num2 = '33';

//console.log(num1 == num2);  // true - compare only values but not types
//console.log(num1 === num2); // false - compare values and types

// Note: It's better to work with === to compare as it's a deep comparison