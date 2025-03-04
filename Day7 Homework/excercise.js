console.log("-----Excercise Section-----") ;
// Declare scores for 3 subjects
//Ex1

let mathScore = 8;
let physicsScore = 7;
let chemistryScore = 9;

// Calculate average score
let averageScore = (mathScore+ physicsScore + chemistryScore) /3;

// Print result

console.log("Average score:", averageScore);

//Ex2
// Declare width and height

let width = 5;
let height = 3;

// Calculate perimeter
let perimeter = (width + height) * 2;

// Calculate area
let area = width * height;

// Print results

console.log("Perimeter:", perimeter);
        console.log("Area:", area);

//Ex3

// Temperature in Celsius

let celsius = 30;

// Convert to Fahrenheit
let fahrenheit = (celsius * 1.8) + 32;

// Print result

console.log(celsius + " °C = " + fahrenheit + " °F");

//Ex4

// Bill amount

let billAmount = 200000;

// Tip percentage

let tipPercent = 10;

// Calculate tip amount
let tipAmount = billAmount * tipPercent / 100;

// Calculate total amount
let totalAmount = tipAmount + billAmount;

// Print results

console.log("Bill amount:", billAmount);
console.log("Tip amount:", tipAmount);
console.log("Total amount:", totalAmount)

//Ex5

// Number to check

let number = 7;

// Check if divisible by 2
let isEven = number / 2 == 0 ;

// Print result

console.log("Number " + number + " is " + (isEven ? "even" : "odd"));