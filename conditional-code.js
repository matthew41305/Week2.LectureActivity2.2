//executes first statment first that i=o then only it if i is less than one which is the condition then it will execute the following numbers that at less than 10.

/*for(let i=0; i <= 10; i++){
    console.log(i);
}
    */

for(let i=10; i >= 0; i--){
    console.log(i);
}



// Declare a new variable "myGrade"
let myGrade = 85; // You can modify this value to test different outputs

// If/else-if/else statement
if (myGrade >= 90) {
    console.log("Grade: A");
} else if (myGrade >= 80) {
    console.log("Grade: B");
} else if (myGrade >= 70) {
    console.log("Grade: C");
} else if (myGrade >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Switch statement
switch (true) {
    case (myGrade >= 90):
        console.log("Grade: A");
        break;
    case (myGrade >= 80):
        console.log("Grade: B");
        break;
    case (myGrade >= 70):
        console.log("Grade: C");
        break;
    case (myGrade >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}

// Preference
// I prefer the if/else-if/else statement because it is straightforward and easy to follow for grade evaluation.
// The switch statement can be less readable in this case since we're using conditions instead of distinct values.

// Modified for loop to output an exclamation point for odd numbers 

/*
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log("!");
    } else {
        console.log(i);
    }
}

*/