var readlineSync = require('readline-Sync');

var numOne = readlineSync.questionInt('Please enter your first number: ');
var numTwo = readlineSync.questionInt('Please enter your second number: ');
var operator = readlineSync.question('Please enter the operation to perform: add, sub, mul, div: ');

function add(a, b) {
    let addNumber = a + b;
    console.log(numOne + " + " + numTwo + " is: " + addNumber )
}

function mul(a, b) {
    let mulNumber = a * b;
    console.log(numOne + " * " + numTwo + " is: " + mulNumber )
}

function div(a, b) {
    let divNumber = a / b;
    console.log(numOne + " / " + numTwo + " is: " + divNumber)
}

function sub(a, b) {
    let subNumber = a - b;
    console.log(numOne + " - " + numTwo + " is: " + subNumber )
}


if (operator == "add") {
    add(numOne, numTwo);
} else if (operator == "mul") {
    mul(numOne, numTwo);
} else if (operator == "div") {
    div(numOne, numTwo);
} else if (operator == "sub") {
    sub(numOne, numTwo);
} else {
    console.log("Try again")
}