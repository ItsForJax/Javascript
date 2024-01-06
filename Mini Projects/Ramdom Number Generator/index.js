// Random Number Generator

// Define a variable for the random number, and the ui components
let randomNum;
const uiNumber = document.getElementById('randomNumber');
const button = document.getElementById('randomize');

// Set the button onclick listener to generate random number 
// and set the ui element
button.onclick = function() {
    randomNum = Math.floor(Math.random() * 6) + 1;
    uiNumber.textContent = randomNum;
};