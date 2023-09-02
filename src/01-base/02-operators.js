// ================= Operators
let num1 = 10;
let num2 = 20;
let num3 = 30;

// Full version
num1 = num1 + num2;
num1 = num1 - num2;
num1 = num1 * num2;
num1 = num1 / num2;

// Short version
num1 += num2;
num1 -= num2;
num1 *= num2;
num1 /= num2;

num1 = num1 ** 3; // num1 * num1 * num1

// Additional operators for if
// > < >= <= == !=


// Parse string to number:
const numAsStr = '23';
let num = 10;
// console.log(typeof (numAsStr + num))  // result is string type and equals '2310'
// console.log(Number(numAsStr) + num)     // result is 33 as it was parsed to number
// console.log(parseInt(numAsStr) + num)   // result is 33 as it was parsed to number. Second way for parsing.
