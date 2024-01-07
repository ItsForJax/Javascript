// Switch statements allow you to evaluate an expression effieciently
// over multiple cases instead of using multiple if else blocks


// This would be more efficient using a switch statement
console.log('Using If Else:');
let day = "Monday";

if (day === "Monday") {
    console.log("Today is Monday");
} else if (day === "Tuesday") {
    console.log("Today is Tuesday");
} else if (day === "Wednesday") {
    console.log("Today is Wednesday");
} else if (day === "Thursday") {
    console.log("Today is Thursday");
} else if (day === "Friday") {
    console.log("Today is Friday");
} else if (day === "Saturday") {
    console.log("Today is Saturday");
} else if (day === "Sunday") {
    console.log("Today is Sunday");
} else {
    console.log("Invalid day");
}

// This implemets the same logic as above using switch statement

console.log('Using Switch:');

switch(day) {
    case 'Monday':
        console.log("Today is Monday");
        break;
    case 'Tuesday':
        console.log("Today is Tuesday");
        break;
    case 'Wednesday':
        console.log("Today is Wednesday");
        break;
    case 'Thursday':
        console.log("Today is Thursday");
        break;
    case 'Friday':
        console.log("Today is Friday");
        break;
    case 'Saturday':
        console.log("Today is Saturday");
        break;
    case 'Sunday':
        console.log("Today is Sunday");
        break;
    default:
        console.log('Invalid Day');
        break;
};

// Switch provides a lot cleanear and easier to follow 
// code for this usecase