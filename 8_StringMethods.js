// String Methods allows you manipulate text or string data

let myName = 'John Doe';


// return a character at a certain position here 0 is 'J'
console.log(`O is ${myName.charAt(0) }`); 

// returns index of first occurence of 'o' which is the 7th character starting from 0
console.log(`1st occurence of 'o' is ${myName.indexOf('o')}`); 

// if you want to get the last index of 'o' instead
console.log(`last occurence of 'o' is ${myName.lastIndexOf('o')}`);

// returns the lenth of an array including space
console.log(`length of myName if ${myName.length}`);

// removes excess spaces from front and last
let withSpace = "   Spacess    ";
console.log(`
withSpace content: ${withSpace}
trimmed name is ${withSpace.trim()}
`);

// uppercasing and lowercasing
console.log(`
uppercase is ${myName.toUpperCase()}
lowercase is ${myName.toLowerCase()}
`);

// checks if a string starts with a certain character or string
if (myName.startsWith('Jo')){
    console.log('Name starts with Jo');
} else {
    console.log('Name does not start with Jo');
}

// checks if the string has a certain character or string
if(myName.includes(' ')){
    console.log('Name contains space');
} else {
    console.log('Name contains space');
}

// replaces occurences of substring with new substring
// replace and replaceAll
console.log(`
replaced space with dash: ${myName.replace(' ','-')}
replaced 'o's with 00: ${myName.replaceAll('o','00')}
`)

// adding padding to a string, to make it 10 characters long
console.log(`
Padded name on start with x's: ${myName.padStart(10, 'X')}
Padded name on end with x's: ${myName.padEnd(10, 'X')}
`);
