// Number
let age: number = 30;
let price: number = 99.99;
let negative: number = -10;

// string
let firstName: string = "John";
let lastname: string = "Doe";
let greeting: string = `Hello, ${firstName} ${lastname}`;

// Boolean
let isActive: boolean = true;
let isComplete: boolean = false;

// type inference
let inferredNumber = 42;
let inferredString = "HellO";

// inferredNumber = "42"; // Error: Type '"42"' is not assignable to type 'number'
// inferredString = 42; // Error: Type '42' is not assignable to type 'string'

console.log("Age: ", age);
console.log("Price: ", price);
console.log("Negative: ", negative);
console.log("First Name: ", firstName);
console.log("Last Name: ", lastname);
console.log("Greeting: ", greeting);
console.log("isActive: ", isActive);
console.log("isComplete: ", isComplete);
console.log("Inferred Number: ", inferredNumber);
console.log("Inferred String: ", inferredString);