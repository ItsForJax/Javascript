// Arithmetic Operators

// Common operators: +, -, *, /, **(exponent), % (modulo)
// Example: 

let num = 10;
num = num + 1;        //add 1
num = num - 1;        //subtract 1
num = num * 2;        //multiply by 2
num = num / 2;        //divide by 2
num = num % 3;        //modulos (remainder of division)
num = num ** 2;       //exponent (raise to power of)

// Augmented assignment operators, it avoids repeating variables
// just add = after the common operator 
// Example: 

let x = 10;
x += 3; // x = x + 3;
x -= 2; // x = x - 2;
x *= 5; // x = x * 5;
x /= 2; // x = x / 2;
x **= 2; // x = x ** 2;
x %= 3; // x = x % 3;

// Increment (++) and Decrement (--), essentially increases or decresses a number
// Example:

let y = 10;

y++; // y = 11
y++; // y = 12

y--; // y = 11
y--; // y = 10

// Order of operation, just like PEMDAS
// Parenthesis > Exponent > Multiply/Divide/Modulo > Add/Subtract
// Example:

let result = 10 + 5 ** 2 - 11 % 2 * (1+1) / 2;
// 10 + 25 - 1 * 2 / 2 
// 10 + 25 - 2 / 2
// 10 + 25 - 1
// 35 - 1
// 34

console.log(`10 + 5 ** 2 - 11 % 2 * (1+1) / 2 = ${result}`);