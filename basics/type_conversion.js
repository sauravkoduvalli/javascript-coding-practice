/* --- TYPE CONVERSION --- */

/*

The process of converting the the of one type to another.
    There are 2 types of type conversion
    1) Implicit converstion - Automatic type conversion.
    2) Explicit conversion - Manual Type conversion.

*/

/* ---IMPLICIT CONVERSION --- */

// numeric string used with '+' gives string type
let implicitResult;

// convert number to string
implicitResult = "3" + 2;
console.log(implicitResult, "-", typeof implicitResult); // The typeof operator gives the data type of the variable.

implicitResult = "3" + true;
console.log(implicitResult, "-", typeof implicitResult);

implicitResult = "3" + null;
console.log(implicitResult, "-", typeof implicitResult);


/* ---EXPLICIT CONVERSION --- */

let explicitResult;

// convert string to number
explicitResult = Number("5");
console.log(explicitResult, "-", typeof explicitResult);

// convert boolean to string
explicitResult = String(true);
console.log(explicitResult, "-", typeof explicitResult);

// convert number to boolean
explicitResult = Boolean(0);
console.log(explicitResult, "-", typeof explicitResult);


// Understanding the rules for type conversion is crucial for avoiding unexpected results in your JavaScript code.

// Here are some key points:

// - Operations involving binary + will convert numbers to strings in the case of string and number concatenation.
// - Logical operations convert operands to boolean values.
// - When subtracting a string from another string, JavaScript attempts to convert both strings to numbers.
// - When you change an object's type, some data might get lost.
