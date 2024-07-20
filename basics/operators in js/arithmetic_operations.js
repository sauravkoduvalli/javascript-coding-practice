// operations that perform basic arithmetic operations.

// created function for each operations and pass argumnets as parameters,
// using arrow function to return result.

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
const increment = (num1) => ++num1; // pre-increment

// decremrnt
const decrement = (num1) => --num1; // pre-decrement

const additionResult = addition(number1, number2);
const subtractionResult = subtraction(number1, number2);
``;
const multiplicationResult = multiplication(number1, number2);
const divisionResult = division(number1, number2);
const modulusResult = modulus(number1, number2);
const exponentiationResult = exponentiation(number1, number2); // number1 to the power of number2
const incrementResult = increment(number1);
const decrementResult = decrement(number1);

console.log("Addition result is ", additionResult);
console.log("Subtraction result is ", subtractionResult);
console.log("Multiplication result is ", multiplicationResult);
console.log("Division result is ", divisionResult);
console.log("Modulus result is ", modulusResult);
console.log("Exponentiation result is ", exponentiationResult);
console.log("Increment result is ", incrementResult);
console.log("decrement result is ", decrementResult);
