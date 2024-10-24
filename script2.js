//string variable example

let myVariable = "Hello World!";
console.log(myVariable);

//change the string variable value
myVariable = "I changed the value of the string variable here"
console.log(myVariable);

// my example

let myDude = "I am 30 years old";
console.log(myDude);

myDude = "I am now 30,000 years old, my age changed..."
console.log(myDude);

// defined constant rate to prevent error
const pi = 3.14;

// pi = 2;  will throw an error



let myNumber = 5;

// this will pull the lowest number between the two assigned variables
Math.min (myNumber, pi);
console.log(Math.min(pi, 5));

// gives output of 3.14 as myDude has no value in this scenario
Math.max (myNumber, myDude);
console.log(Math.max(pi, 1));