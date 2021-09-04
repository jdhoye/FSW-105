var readlineSync = require('readline-Sync');

var numOne = readlineSync.questionInt('Please enter your first number: ');
var numTwo = readlineSync.questionInt('Please enter your second number: ');
var operator = readlineSync.question('Which operation would you like to perform? add, sub, mul, div: ');

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

function myCalc(num1, num2, calcOperation){
    if (calcOperation == "add") {
        add(num1, num2);
    } else if (calcOperation == "mul") {
        mul(num1, num2);
    } else if (calcOperation == "div") {
        div(num1, num2);
    } else if (calcOperation == "sub") {
        sub(num1, num2);
    } else {
        console.log("Something went wrong! Please, try again")
    }
}

myCalc(numOne, numTwo, operator);
