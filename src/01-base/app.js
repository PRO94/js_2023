const firstValueElement = document.getElementById('firstValue');
const secondValueElement = document.getElementById('secondValue');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const submitBtn = document.getElementById('submit');
const resultElement = document.getElementById('result');

let action = '+';

/*
// get values from the inputs
// var num1 = firstValueElement.value;
// var num2 = secondValueElement.value;

// var sum = num1 + num2;                   // it's just concatenation of strings
// console.log(typeof sum);                 // concatenated string

//var sum = Number(num1) + Number(num2);    // we mapped string to number type and only after that we can sum two numbers
//console.log(typeof sum);                  // type = number
*/

plusBtn.onclick = function() {
    action = '+';
}

minusBtn.onclick = function() {
    action = '-';
}

function printResult(result) {
    /*
    // full format
    if (result < 0) {
        resultElement.style.color = 'red';
    }
    else {
        resultElement.style.color = 'green';
    }
    */
    // ternary operator
    resultElement.style.color = result < 0 ? 'red' : 'green';

    resultElement.textContent = result;
}

function calculateNumbersWithAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    if (actionSymbol == '+') {
        return num1 + num2;
    } else if (action == '-') {
        return num1 - num2;
    }
}

submitBtn.onclick = function() {
    const result = calculateNumbersWithAction(firstValueElement, secondValueElement, action);
    printResult(result);
};