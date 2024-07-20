/* --- VARIABLE --- */


// A variables is a container for storing data.

// varibale named "fullName" stores string value "Saurav".
var fullName = "Saurav K"; 

// We can use 'var', 'let' and 'const' keywords to declare variables.
var name = 'Saurav k';
let age = 27; 
const birthYear = 1997;

// var is fucntion scoped (variables can be accessed anywhere in the program), can be re-declare, can be hoisted.
// let is block scoped (variables can be accessed only inside the block {}), cannot be re-declare and cannot be hoisted (hoised will produce "ReferenceError").
// const is block scoped, should be initialised when declaring, cannot be re-declared, cannot be hoisted.

// using variable without initialising it will throw 'undefined' error.
let variableName;
console.log(variableName); // this will produce "undefined error".
