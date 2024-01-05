// Variable is a named container that stores some form of data

// Example: let name; 
// note. this only 
let MyName; 

// This will log undefined since the variable 'name' 
// does not have a value or assigned value
console.log('Not assigned: ',MyName); 

// This assigns the string 'John Doe' to the variable name
MyName = 'John Doe';

// This should log 'John Doe' since the variable name 
// now has a value assigned to it
console.log('Assigned: ',MyName); 

// You can also declare variables with const which cannot be reassigned
const pi = 3.14;

try {

    pi = 100;   // This will try to change pi, 
                // but will throw an error

} catch (error) {
    
    console.log(`Error: ${error.message}`); // Logs the error

}

// Variables can also be numbers, char, booleans etc.

let age = 30;
let isApproved = true;
let character = 'a';
let floatingPointNumber = 3.14;

// Logs all variables
console.log(`age [${typeof age}]: ${age}`); // typeof determines data type, here age is a number!
console.log(`loatingPointNumber [${typeof floatingPointNumber}]: ${floatingPointNumber}`);
console.log(`isApproved [${typeof isApproved}]: ${isApproved}`);
console.log(`character [${typeof character}]: ${character}`); 

// Declare and initialize multiple variables in one statement
let var1 = 'John', var2 = 30, var3 = 'Lucas';

// Do something with the variables
age += 1; // Increment 1 to age
console.log(`Next year age will be: ${age}`);

// Do arithmatic operations with variables
let newNum = age + floatingPointNumber;
console.log(`Sum of age and floatingPointNumber is: ${newNum}`);

// String concantenation with variables
let fullName = var1 + " " + var3;
console.log(`Full name is: ${fullName}`);

// Use variable in the html element
// There are 3 p tags on the html named p1, p2, and p3
// Using document.getElemntById we will change each values

document.getElementById("p1").textContent = `Hello my name is ${MyName}`;
document.getElementById("p2").textContent = `I'm ${age} years old`;
document.getElementById("p3").textContent = `And the value of pi is ${pi}`;

// you can use ``, '', or "" for text.
// `` is preffered since you can do template literal like ${variable} inside