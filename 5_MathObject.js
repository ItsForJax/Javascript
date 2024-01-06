// Math -  A builtin object for mathematical 
//         operations, properties, and methods

// It has common constants like the value of Pi and e
const PI = Math.PI;
const E = Math.E;

console.log(`Pi: ${PI}\ne: ${E}`);

// Common math functions

let x = 2.12;
let y = -1;
let z = 3;

console.log(
    `
    ${Math.round(x)} Rounds to nearest integer from ${x}
    ${Math.floor(x)} Rounds down from ${x}
    ${Math.ceil(x)} Rounds up from ${x}
    ${Math.abs(y)} Absolute value from ${y}
    ${Math.max(x,y,z)} Maximum value from ${x}, ${y}, ${z}
    ${Math.min(x,y,z)} Minimum value from ${x}, ${y}, ${z}
    ${Math.sqrt(x)} Square root of ${x}
    ${Math.sin(x)} Sine of ${x}
    ${Math.cos(x)} Cosine of ${x}
    ${Math.tan(x)} Tangent of ${x}
    ${Math.sign(x)} Sign of ${x} (+1, -1 or 0)
    ${Math.log(x)} Natural log of ${x}
    ${Math.random()} Random number between 0-1
    `
);
