// Get user input

// You can do this 2 ways:
// 1. using window prompt then console.log and alert

// Get prompt value
let promptInput = window.prompt("Enter your name: ");

// Display prompt value
window.alert(`Hello ${promptInput}!`);
console.log(`From Prompt: ${promptInput}!`);

// 2. using textbox input and button click 
// then console.log and dynamic h1 change

document.getElementById("btn").onclick = function() {

    // Get texbox value
    let textBoxInput = document.getElementById('inputBox').value;

    // Display texbox value by changing the h1 and console log
    document.getElementById("h1-id").textContent = `Hello ${textBoxInput}!`;
    console.log(`From textbox: ${textBoxInput}!`);
};

// Note. btn has an eventListener called onclick that when triggers calls 
// the function and execute everything inside.
// also consider type conversion if you want to add arithmetic or other operations

// String Conversion
// you can use functions (Number(), String(), or Boolean())

let x = "hello";
let y = "hello";
let z = "hello";

x = Number(x); // Turns to Nan (Not a Number)
y = String(y); // Nothing happen
z = Boolean(z); // Turns True

console.log(`x ${typeof x}: ${x}, y ${typeof y}: ${y}, z ${typeof z}: ${z}`);
