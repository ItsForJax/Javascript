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