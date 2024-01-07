// Conditions - if/else statements where it runs something base on the 
//              if condition being true or false or else do else statement

// if can be alone, paired with "else" or nest with more "else if"

let age = 18;

// Lets say i want to console log if age is above 18
if(age > 18) {
    console.log('You are above 18');
} 
else if (age <= 0 ){  // No one could be below 0 years old right?
    console.log('Invalid age');
}
else { // I'll also console log something else for those who are below 18
    console.log('You are underage')
}

// You can also nest if else in side any if else statement
// we'll use the same age but this time to check for eligibility to drive

// We will also add a new variable to check for license
let hasLicense = false;

if(age > 16) {
    console.log('Youre eligible to drive');
    // Here we can also add an condition pay attention to the tab
    if(hasLicense){
        console.log('You can drive');
    } else {
        console.log('You need a license');
    }
} 
else if (age <= 0 ){  
    console.log('Invalid age');
}
else {
    console.log('You are underage')
}

// There is also a shortcut to if else statement, its called
// ternary operator but its limited to a single expression
// for example if somethingTrue else somethingFalse can be written as
// somethingTrue ? ToThisToTrue: ToThisToFalse;

let eligible = age > 16 ? "Youre eligible to drive" : "You are underage";

console.log(`Eligibility: ${eligible}`); 
