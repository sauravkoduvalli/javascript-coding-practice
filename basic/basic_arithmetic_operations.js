// perform basic arithmetic operations.

let number1= 9;
let number2= 6;

// addition
function addition(num1, num2) {
    return num1 + num2;
}

// subtraction
function subtraction(num1, num2){
    return num1 - num2;
}

// multiplication
function multiplication(num1, num2) {
    return num1 * num2;
}

// division
function division(num1, num2) {
    return num1 / num2;
}

// modulus
function modulus(num1, num2) {
    return num1 % num2;
}

const additionResult = addition(number1, number2);
const subtractionResult = subtraction(number1, number2);
const multiplicationResult = multiplication(number1, number2);
const divisionResult = division(number1, number2);
const modulusResult = modulus(number1, number2);

console.log("Addition of number1 and number2 is ", additionResult);
console.log("Subtraction of number1 and number2 is ", subtractionResult);
console.log("Multiplication of number1 and number2 is ", multiplicationResult);
console.log("Division of number1 and number2 is ", divisionResult);
console.log("Modulus of number1 and number2 is ", modulusResult);