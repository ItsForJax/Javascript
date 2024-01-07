// Logic operators used to combine and manipulate boolean values

// AND operator (&&)
// OR operator (||)
// NOT operator (!)

// AND which returns true if both conditions are true
let isBig = true;
let isCheap = true;

// Lets say you want to buy a burger that is big and cheap
let burger = isBig && isCheap;

if (burger) {
    console.log("I'll buy the big and cheap burger!");
} else {
    console.log("I will not buy the burger");
}

// OR which returns true if one of the conditions is true
// Lets say you want to buy a big burger regardless of price

let bigBurger = isBig || isCheap; // This will be true as long as one is true

if (bigBurger) {
    console.log("I'll buy the burger!");
} else {
    console.log("I will not buy the burger");
}

// NOT operator which inverts the result
// Lets say you will invert isBig

let notBigBurger = !isBig;

console.log(`is the burger big: ${notBigBurger}`);

// Since we are talking boolean values, lets talk about comaparison operators

// Equal to (==)
// Not equal to (!=)
// Strict equal to (===)
// Strict not equal to (!==)

// Equal to is essentially AND as long as 2 inputs are the same its true
// regardless of data type
// example:

let Pi = 3.14; // number data type

// we compared number Pi to string "3.14" using == operator which is true
Pi == "3.14" ? console.log("its Equal") : console.log("not equal")

// same goes with the not equal
Pi != "3.14" ? console.log("not equal") : console.log("its Equal")

// now with strict equal and not equal
Pi === "3.14" ? console.log("strictly equal") : console.log("not strictly equal")
Pi !== "3.14" ? console.log("strictly not equal") : console.log("strictly equal")