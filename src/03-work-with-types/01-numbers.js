// ========== Numbers, Math
// Details about Number obj: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// Details about Math obj: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// const num = 42;     // integer
// const float = 42.42;// float
// const pow = 10e3;
// const big = 1000000;
// const bigAlt = 1_000_000_000;
// const number = Number('33');    // string to number
// const maxInt = Number.MAX_SAFE_INTEGER;
// const minNegativeInt = Number.MIN_SAFE_INTEGER;
// const sqr = Math.pow(2, 33);    // 2 ^ 33 

// const checkNaN = Number.isNaN(23 / undefined);
// const checkIsInfinite = Number.isFinite(Number.POSITIVE_INFINITY); // or NEGATIVE_INFINITY

// const strInt = '33';
// const strFloat = '33.25';
// console.log(Number(strInt));
// console.log(Number(strFloat));
// console.log(parseInt(strInt));
// console.log(parseFloat(strFloat));
// console.log(strInt, +strInt);       // + before a string number converts it to the number type
// console.log(strFloat, +strFloat);
// console.log(parseFloat((0.1 + 0.2).toFixed(10)));

// ========== BigInt
// 12312313n - bigint. Need to add 'n' to the end of the number to mark as bigint type
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER + 999999999)
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 999999999n)   // bigint result
// console.log(parseInt(100n) - 6)
// console.log(5n / 2n)    // 2 - because bigint doesn't work with float values
// console.log(5 / 2)      // 2.5

// ========== Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 4))
// console.log(Math.abs(-33))  // res +33
// console.log(Math.max(2, 5, 3231, 23, 66, 3))    // 3231
// console.log(Math.min(2, 5, 3231, 23, 66, 3))    // 2
// console.log(Math.floor(4.9))    // 4
// console.log(Math.ceil(4.9))     // 5
// console.log(Math.round(4.9))    // 5
// console.log(Math.trunc(4.9))    // 4
// console.log(Math.random())      // Random value generaion

// Example Math usage to generate random value in a range
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getRandomNumber(1, 100));