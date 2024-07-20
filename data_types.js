/* --- DATA TYPES --- */

/*

Data type represents the differnet type of values.
    There are 2 types of data types.
        1) Primitive - Can hold single values in a variable
            Ex: String, Number, BigInt, Boolean, Undefined, Null and Symbol.
        2) Non-primitive - can hold multiple values in a variable
            Ex: Object.

    String - sequesce of charecters, are provided inside 'single', "double" or `backticks` [ex: 'saurav', "Saurav", `saurav k`]
    Number - integer or floating point numbers [ex: 27, 1997]
    BigInt - An integer with arbitrary precision, created by appending n to the end of an integer [ex: 900719925124740999n, 1n]
    Boolean - represent TRUE or FALSE values [ex: true or false]
    Undefined - data type whose value is not initialised [ex: let a;]
    Null - represent there is an empty or void value [ex: let a = null;]
    Symbol - data types whose instances are unique and immutable [ex: let value = Symbol('Saurav');]
    Object - collection of key-value pairs [ex: let person = {name: 'saurav k', age: 27};]
*/

let fullName = 'saurav k';
console.log(typeof fullName);

let birthYear = 1997;
console.log(typeof birthYear);

let isMarried = false;
console.log(typeof isMarried);

let bigIntVale = 900719925124740998n;
console.log(typeof bigIntVale);

let undefinedValue;
console.log(typeof undefinedValue);

let nullValue = null;
console.log(nullValue);
// console.log(typeof nullValue); // type of null value is Object.

let person = {name: 'saurav k', age: 27}
console.log(typeof person);

