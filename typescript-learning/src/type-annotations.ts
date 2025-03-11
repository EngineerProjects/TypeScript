// variable annotation
let counter: number = 0;
let message_: string = 'Hello!';
let isEnable: boolean = true;

// function parameter and return tupe annotations
function add(a:number, b:number): number {
    return  a  + b;
}

// Function with multiple parameters
function createGreeting(name: string, age: number): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

// optional parameter
function greet(name: string, greeting? : string): string {
    if (!greeting) {
        return `Hello, ${name}`;
    }
    return `${greeting} ${name}`;
}

// Default parameters
function logMessage(message: string, logLevel: string = 'info'): void {
    console.log(`${logLevel}: ${message}`);
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log("Adding 5 + 3 = ", add(5, 3));
console.log("Creating greeting: ", createGreeting('John', 30));
console.log("Greeting: ", greet('John'));
console.log("Greeting with message: ", greet('John', 'Good morning'));
logMessage('System started');
logMessage('System crashed', 'error');
console.log("Sum of numbers: ", sum(1, 2, 3, 4, 5));