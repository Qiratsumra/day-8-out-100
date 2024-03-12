let orange = "orange";
let orangeUppercase = "Orange";
let num1 = 10;
let num2 = 50;
let vegetables = ["Tomato", "Carrot", "Beet", "Onion", "Potato"];

// Tests for equality and inequality with strings
// equality test with string
console.log("Is orange is equal to Orange?");
console.log(orange == "Orange");

// unequality test with string
console.log("Is orange is not equal to Orange?");
console.log(orange != "Orange");

// Tests using the lower case function
//equal to lower case function
console.log("Is orange is equal to Orange after converting into lower case?");
console.log(orangeUppercase.toLowerCase() == orange);

// inequal to lower case function
console.log("Is orange is not equal to Orange after converting into lower case?");
console.log(orangeUppercase.toLowerCase() != orange);


//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// equality + inequality
console.log("10 is equal to 50?");
console.log(num1 == num2);

console.log("ten is not equal to fifty");
console.log(num1 != num2);

// greater than 
console.log("ten is greater than fifty");
console.log(num1 > num2 );

console.log("fifty is greater than ten");
console.log(num2 > num1);

// less than
console.log("10 is less than 50");
console.log(num1 < num2);

console.log("50 is less than 10");
console.log(num2 < num1);

// greater than + equality
console.log("50 is equal to 10");
console.log(num2 == num1);

console.log("50 is greater than 10");
console.log(num2 > num1);

// less than + inequality
console.log("10 is less than 50");
console.log(num1<num2);
 
console.log("10 is inequal to 50");
console.log(num1 != num2);


//  Tests using "and" and "or" operators
console.log("Is ten is equal to 50 and 50 is greater than 10?");
console.log(num1 < num2 && num2 == num1);

console.log("Is ten is equal to 50 and 50 is greater than 10?");
console.log(num1 < num2 || num2 == num1);


//  Test whether an item is in a array
console.log("Is Beet is include in vegetable list");
console.log(vegetables.includes("Beet"));

// Test whether an item is not in a array
console.log("Is Green Onion is include in vegetable list");
console.log(vegetables.includes("Green Onion"));

console.log("Is Tomato is not includes in vegetable list");
console.log(! vegetables.includes("Tomato"));
