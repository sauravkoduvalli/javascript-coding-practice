// perform basic arithmetic operations using arrow function.

let number1 = 4;
let number2 = 2;

// addition - find the sum of operands
const addition = (num1, num2) => num1 + num2;

// subtraction - find the difference between operands
const subtraction = (num1, num2) => num1 - num2;

// multiplication - find the product of operands
const multiplication = (num1, num2) => num1 * num2;

// division - produces the quotient of operands, divident and divisor
const division = (num1, num2) => num1 / num2;

// modulus - produces the remainder of operands
const modulus = (num1, num2) => num1 % num2;

// exponentiation (Power) - find the power of first operand raised to the second operand.
const exponentiation = (num1, num2) => num1 ** num2;

// increment - variable is incremented by 1
const increment = (number1) => ++number1; // pre-increment

// decremrnt
const decrement = (number1) => --number1; // pre-decrement

const additionResult = addition(number1, number2);
const subtractionResult = subtraction(number1, number2);``
const multiplicationResult = multiplication(number1, number2);
const divisionResult = division(number1, number2);
const modulusResult = modulus(number1, number2);
const exponentiationResult = exponentiation(number1, number2); // number1 to the power of number2
const incrementResult = increment(number1);
const decrementResult = decrement(number1);

console.log("Addition of number1 and number2 is ", additionResult);
console.log("Subtraction of number1 and number2 is ", subtractionResult);
console.log("Multiplication of number1 and number2 is ", multiplicationResult);
console.log("Division of number1 and number2 is ", divisionResult);
console.log("Modulus of number1 and number2 is ", modulusResult);
console.log("Exponentiation of number1 and number2 is ", exponentiationResult);
console.log("Increment of number1 is ", incrementResult);
console.log("decrement of number1 is ", decrementResult);
