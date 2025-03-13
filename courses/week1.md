# Week 1: Setting Up & TypeScript Basics

## Day 1: Understanding TypeScript & Environment Setup

### What is TypeScript?

TypeScript is a statically-typed superset of JavaScript developed by Microsoft. This means:

1. All JavaScript code is valid TypeScript code
2. TypeScript adds optional static typing to JavaScript
3. TypeScript code compiles down to plain JavaScript that runs in browsers or Node.js

### Why TypeScript?

TypeScript offers several advantages over plain JavaScript:

- **Type Safety**: Catches type-related errors at compile time instead of runtime
- **Better IDE Support**: Provides intelligent code completion, navigation, and refactoring
- **Enhanced Readability**: Type annotations serve as documentation
- **Easier Maintenance**: Makes large codebases more manageable

Think of TypeScript as a safety net for JavaScript. If JavaScript is like riding a bicycle without a helmet, TypeScript gives you a helmet, knee pads, and training wheels that you can remove as you become more confident.

### Environment Setup

Let's set up your development environment:

#### 1. Install Node.js and npm

Node.js is a JavaScript runtime that allows you to run JavaScript code outside the browser. npm (Node Package Manager) comes bundled with Node.js and helps manage packages and dependencies.

Download and install Node.js from [nodejs.org](https://nodejs.org/).

Verify installation by running:
```bash
node --version
npm --version
```

#### 2. Install TypeScript globally

```bash
npm install -g typescript
```

Verify installation:
```bash
tsc --version
```

#### 3. Set up a code editor

Visual Studio Code (VSCode) is highly recommended for TypeScript development because:
- It's created by Microsoft (same company behind TypeScript)
- It has built-in TypeScript support
- It provides excellent IntelliSense and type checking

Download and install VSCode from [code.visualstudio.com](https://code.visualstudio.com/).

#### 4. Create your first TypeScript project

Create a new directory for your project:
```bash
mkdir typescript-learning
cd typescript-learning
```

Initialize a new npm project:
```bash
npm init -y
```

Create a TypeScript configuration file (tsconfig.json):
```bash
tsc --init
```

The generated tsconfig.json contains various compiler options. For now, we'll use a simplified version:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

Create the source directory:
```bash
mkdir src
```

## Day 2: Your First TypeScript Program & Basic Types

### Creating Your First TypeScript Program

Create a file `src/hello.ts`:

```typescript
// This is your first TypeScript program
function greet(name: string) {
    return `Hello, ${name}!`;
}

// Call the function with a string
const message = greet("TypeScript Learner");
console.log(message);

// This would cause a compile-time error
// Uncomment to see the error:
// const errorMessage = greet(123);
```

Compile your TypeScript code:
```bash
tsc --outDir dist
```

Run the compiled JavaScript:
```bash
node dist/hello.js
```

### Basic Types

TypeScript provides several built-in types:

#### Primitive Types

```typescript
// src/primitive-types.ts

// Number
let age: number = 30;
let price: number = 99.99;
let negative: number = -10;

// String
let firstName: string = "John";
let lastName: string = 'Doe';
let greeting: string = `Hello, ${firstName} ${lastName}`;

// Boolean
let isActive: boolean = true;
let isCompleted: boolean = false;

// Type inference
let inferredNumber = 42; // TypeScript infers this as number
let inferredString = "Hello"; // TypeScript infers this as string

// This will cause an error:
// inferredString = 123;

console.log("Age:", age);
console.log("Name:", firstName, lastName);
console.log("Greeting:", greeting);
console.log("Is active?", isActive);
console.log("Inferred number:", inferredNumber);
```

## Day 3: More Basic Types and Arrays

### Special Types

```typescript
// src/special-types.ts

// any - disables type checking (use sparingly!)
let dynamicValue: any = 10;
dynamicValue = "string now";
dynamicValue = true;
console.log("Any type:", dynamicValue);

// unknown - safer version of any
let userInput: unknown = getUserInput(); // Assume this function exists
// Need type checking before using unknown values
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}

// void - absence of any type, commonly used for functions that don't return a value
function logMessage(message: string): void {
    console.log(message);
    // No return statement needed
}

// never - represents values that never occur
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // This function never returns
    }
}

// null and undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

function getUserInput(): unknown {
    return "Sample user input";
}
```

### Arrays and Tuples

```typescript
// src/arrays-tuples.ts

// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
// Alternative syntax
let moreNumbers: Array<number> = [6, 7, 8, 9, 10];

// Array of strings
let fruits: string[] = ["apple", "banana", "orange"];

// Mixed array (using any - avoid when possible)
let mixed: any[] = [1, "two", true];

// Better alternative to mixed array
let betterMixed: (number | string | boolean)[] = [1, "two", true];

// Array methods
numbers.push(6); // OK
// This would cause an error:
// numbers.push("seven");

// Readonly arrays
const readonlyNumbers: readonly number[] = [1, 2, 3];
// This would cause an error:
// readonlyNumbers.push(4);

// Tuples - fixed-length arrays with specific types in specific positions
let person: [string, number] = ["John", 30];
console.log(`Name: ${person[0]}, Age: ${person[1]}`);

// Destructuring a tuple
const [name, age] = person;
console.log(`Destructured - Name: ${name}, Age: ${age}`);

// Optional tuple elements
let optionalTuple: [string, number?] = ["Book title"];
// Now the second element is optional

// Named tuples for better readability
let namedPerson: [name: string, age: number] = ["Jane", 25];

console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);
console.log("Mixed array:", mixed);
console.log("Better mixed array:", betterMixed);
console.log("Person tuple:", person);
console.log("Optional tuple:", optionalTuple);
console.log("Named tuple:", namedPerson);
```

---
## TypeScript Modules and Organization

### Understanding TypeScript's Module System

When working with multiple TypeScript files, it's important to understand how TypeScript handles modules to prevent naming conflicts.

By default, TypeScript treats all files as part of the same scope, which can lead to errors like:
- Duplicate function names
- Duplicate variable declarations
- Unintended variable access between files

To properly organize your code, you should make each file a module by using exports:

```typescript
// math.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}
```

Then import these functions where you need them:

```typescript
// calculator.ts
import { add, subtract } from './math';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
```

### Common Module Patterns

1. **Named exports:**

```typescript
// utils.ts
export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
```

2. **Default exports:**

```typescript
// user.ts
export default class User {
    constructor(public name: string, public email: string) {}
}

// Usage:
import User from './user';
const user = new User('John', 'john@example.com');
```

3. **Mixed exports:**

```typescript
// api.ts
export function fetchData() { /* ... */ }

export default class API {
    /* ... */
}

// Usage:
import API, { fetchData } from './api';
```

---

## Day 4: Type Annotations and Type Inference

### Type Annotations

Type annotations are a way to explicitly define the type of a variable, parameter, or return value.

```typescript
// src/type-annotations.ts

// Variable annotations
let counter: number = 0;
let message: string = "Hello";
let isEnabled: boolean = true;

// Function parameter and return type annotations
function add(a: number, b: number): number {
    return a + b;
}

// Function with multiple parameters
function createGreeting(name: string, age: number): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Optional parameters (using ?)
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

// Default parameters
function logMessage(message: string, logLevel: string = "info"): void {
    console.log(`[${logLevel}] ${message}`);
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Adding 5 + 3:", add(5, 3));
console.log("Greeting:", createGreeting("Alice", 30));
console.log("Default greeting:", greet("Bob"));
console.log("Custom greeting:", greet("Carol", "Good morning"));
logMessage("System started");
logMessage("System error", "error");
console.log("Sum of numbers:", sum(1, 2, 3, 4, 5));
```

### Type Inference

TypeScript can often infer types from context, reducing the need for explicit annotations.

```typescript
// src/type-inference.ts

// TypeScript infers these types
let inferred1 = 42; // number
let inferred2 = "hello"; // string
let inferred3 = true; // boolean
let inferred4 = [1, 2, 3]; // number[]
let inferred5 = null; // any (careful with this one)

// Type inference in functions
function multiply(a: number, b: number) {
    // Return type is inferred as number
    return a * b;
}

// TypeScript can infer complex types
let inferred6 = { name: "John", age: 30 }; // { name: string, age: number }

// Type inference with generics
let inferred7 = [1, 2, 3].map(n => n.toString()); // string[]

// Contextual typing
document.addEventListener("click", function(event) {
    // event is inferred as MouseEvent
    console.log(event.button); // OK
    // console.log(event.keyCode); // Error: Property 'keyCode' does not exist on type 'MouseEvent'
});

console.log("Inferred types example");
```

---
# TypeScript Week 1 - Comprehensive Exercises

These exercises are designed to help you apply all the concepts you've learned in Week 1 of your TypeScript course. Each exercise integrates multiple TypeScript fundamentals into a practical problem.

## Exercise 1: Calculator Application

**Problem Description:**
Build a calculator application that can perform basic arithmetic operations and handle different input types.

**Requirements:**
1. Create functions for the four basic operations (addition, subtraction, multiplication, division)
2. Include proper error handling (e.g., division by zero)
3. Support both integer and decimal calculations
4. Use TypeScript's type system to ensure type safety
5. Create a clean interface for performing and displaying calculations

**Hints:**
- Define a type for the supported operations
- Include proper validation for inputs
- Think about how to structure your code to make it modular and reusable

## Exercise 2: Temperature Unit Converter

**Problem Description:**
Create a comprehensive temperature conversion utility that can convert between different temperature units (Celsius, Fahrenheit, and Kelvin).

**Requirements:**

1. Create a TypeScript program that provides functions for converting between all three temperature units
2. Include validation to prevent invalid inputs (e.g., temperatures below absolute zero)
3. Implement a function that takes a temperature value, source unit, and target unit, then returns the converted value
4. Add proper type annotations for all parameters and return values
5. Create a demonstration that shows conversions between all units with formatted output

**Hints:**
- Absolute zero is -273.15°C, -459.67°F, or 0K
- The conversion formulas are:
  - °C to °F: (°C × 9/5) + 32
  - °F to °C: (°F - 32) × 5/9
  - °C to K: °C + 273.15
  - K to °C: K - 273.15
  - °F to K: (°F - 32) × 5/9 + 273.15
  - K to °F: (K - 273.15) × 9/5 + 32

## Exercise 3: Grade Analysis System

**Problem Description:**
Develop a grade analysis system for a classroom that can track student grades, calculate statistics, and generate reports.

**Requirements:**
1. Define appropriate types to represent students, assignments, and grades
2. Implement a class to manage the gradebook with methods to:
   - Add students to the class
   - Record assignment grades for students
   - Calculate average grades for students and for the class
   - Determine the highest and lowest performers
   - Generate letter grades based on numerical scores
3. Include proper validation for inputs (e.g., grades between 0-100)
4. Create a demonstration that showcases all the functionality with sample data

**Hints:**
- Consider using arrays and objects to store student and grade information
- Think about how to handle missing assignments or students with no grades
- Use TypeScript's type system to ensure data consistency

## Exercise 4: Banking System Simulator

**Problem Description:**
Create a simple banking system that allows users to manage multiple accounts, perform transactions, and view account summaries.

**Requirements:**
1. Define types for different account types (e.g., checking, savings)
2. Implement a `BankAccount` class with methods to:
   - Deposit funds
   - Withdraw funds (with validation)
   - Check balance
   - Get transaction history
3. Implement a `Bank` class to:
   - Create new accounts
   - Find accounts by ID or owner name
   - Generate account summaries
   - Calculate total funds across all accounts
4. Ensure proper validation (e.g., prevent negative balances, invalid transaction amounts)
5. Include appropriate error handling
6. Create a demonstration with sample accounts and transactions

**Hints:**
- Use access modifiers (public/private) to control access to account details
- Consider using tuples or custom types to represent transactions
- Think about how to store and format the transaction history

---

## Solutions

### Exercise 1 Solution: Calculator Application

```typescript
// src/calculator.ts

// Define a type for the supported operations
type Operation = "add" | "subtract" | "multiply" | "divide";

// Function to add two numbers
function add(a: number, b: number): number {
    return a + b;
}

// Function to subtract two numbers
function subtract(a: number, b: number): number {
    return a - b;
}

// Function to multiply two numbers
function multiply(a: number, b: number): number {
    return a * b;
}

// Function to divide two numbers
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Main calculator function that performs the specified operation
function calculate(a: number, b: number, operation: Operation): number {
    switch (operation) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            // This should never happen with TypeScript's type checking
            throw new Error(`Unsupported operation: ${operation}`);
    }
}

// Function to format and display a calculation
function displayCalculation(a: number, b: number, operation: Operation): void {
    try {
        const result = calculate(a, b, operation);
        
        // Determine the operator symbol for display
        let operatorSymbol = "";
        switch (operation) {
            case "add": operatorSymbol = "+"; break;
            case "subtract": operatorSymbol = "-"; break;
            case "multiply": operatorSymbol = "×"; break;
            case "divide": operatorSymbol = "÷"; break;
        }
        
        console.log(`${a} ${operatorSymbol} ${b} = ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error("An unknown error occurred");
        }
    }
}

// Demo function to test the calculator
function runCalculatorDemo(): void {
    console.log("===== Calculator Demo =====");
    
    // Test with integer values
    displayCalculation(5, 3, "add");
    displayCalculation(10, 4, "subtract");
    displayCalculation(6, 7, "multiply");
    displayCalculation(15, 3, "divide");
    
    // Test with decimal values
    displayCalculation(10.5, 2.5, "add");
    displayCalculation(7.75, 3.25, "subtract");
    displayCalculation(2.5, 2.5, "multiply");
    displayCalculation(10.8, 3, "divide");
    
    // Test error handling
    displayCalculation(10, 0, "divide"); // This should show an error
}

// Run the calculator demo
runCalculatorDemo();
```

### Exercise 2 Solution: Temperature Unit Converter

```typescript
// src/temperature-converter.ts

// Define a type for temperature units
type TemperatureUnit = "Celsius" | "Fahrenheit" | "Kelvin";

// Define the absolute zero values for each unit
const ABSOLUTE_ZERO = {
    Celsius: -273.15,
    Fahrenheit: -459.67,
    Kelvin: 0
};

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius: number): number {
    return celsius + 273.15;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
}

// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit: number): number {
    const celsius = fahrenheitToCelsius(fahrenheit);
    return celsiusToKelvin(celsius);
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin: number): number {
    const celsius = kelvinToCelsius(kelvin);
    return celsiusToFahrenheit(celsius);
}

// Function to validate that a temperature is not below absolute zero
function isValidTemperature(value: number, unit: TemperatureUnit): boolean {
    return value >= ABSOLUTE_ZERO[unit];
}

// Main conversion function that handles all unit combinations
function convertTemperature(
    value: number, 
    fromUnit: TemperatureUnit, 
    toUnit: TemperatureUnit
): number {
    // Validate the input temperature
    if (!isValidTemperature(value, fromUnit)) {
        throw new Error(
            `Invalid temperature: ${value} ${fromUnit} is below absolute zero ` +
            `(${ABSOLUTE_ZERO[fromUnit]} ${fromUnit})`
        );
    }

    // If the units are the same, no conversion needed
    if (fromUnit === toUnit) {
        return value;
    }

    // Convert based on the unit combination
    switch (fromUnit) {
        case "Celsius":
            return toUnit === "Fahrenheit" 
                ? celsiusToFahrenheit(value) 
                : celsiusToKelvin(value);
        
        case "Fahrenheit":
            return toUnit === "Celsius" 
                ? fahrenheitToCelsius(value) 
                : fahrenheitToKelvin(value);
        
        case "Kelvin":
            return toUnit === "Celsius" 
                ? kelvinToCelsius(value) 
                : kelvinToFahrenheit(value);
        
        default:
            throw new Error(`Unsupported unit: ${fromUnit}`);
    }
}

// Function to format a temperature for display
function formatTemperature(value: number, unit: TemperatureUnit): string {
    const rounded = Math.round(value * 100) / 100; // Round to 2 decimal places
    
    let symbol = "";
    switch (unit) {
        case "Celsius": symbol = "°C"; break;
        case "Fahrenheit": symbol = "°F"; break;
        case "Kelvin": symbol = "K"; break;
    }
    
    return `${rounded}${symbol}`;
}

// Function to display a temperature conversion
function displayConversion(
    value: number, 
    fromUnit: TemperatureUnit, 
    toUnit: TemperatureUnit
): void {
    try {
        const convertedValue = convertTemperature(value, fromUnit, toUnit);
        console.log(
            `${formatTemperature(value, fromUnit)} = ` +
            `${formatTemperature(convertedValue, toUnit)}`
        );
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error("An unknown error occurred");
        }
    }
}

// Demo function to test the temperature converter
function runTemperatureConverterDemo(): void {
    console.log("===== Temperature Converter Demo =====");
    
    // Test all conversion combinations
    const testValues = [
        { value: 0, unit: "Celsius" },
        { value: 32, unit: "Fahrenheit" },
        { value: 273.15, unit: "Kelvin" },
        { value: 100, unit: "Celsius" },
        { value: 98.6, unit: "Fahrenheit" },
        { value: 310, unit: "Kelvin" },
    ];
    
    const units: TemperatureUnit[] = ["Celsius", "Fahrenheit", "Kelvin"];
    
    // Convert each test value to all other units
    testValues.forEach(test => {
        const fromUnit = test.unit as TemperatureUnit;
        console.log(`\nConverting from ${formatTemperature(test.value, fromUnit)}:`);
        
        units.forEach(toUnit => {
            if (fromUnit !== toUnit) {
                displayConversion(test.value, fromUnit, toUnit);
            }
        });
    });
    
    // Test validation of temperatures below absolute zero
    console.log("\nTesting validation:");
    displayConversion(-300, "Celsius", "Fahrenheit"); // Below absolute zero
    displayConversion(-500, "Fahrenheit", "Kelvin"); // Below absolute zero
    displayConversion(-10, "Kelvin", "Celsius"); // Below absolute zero
}

// Run the temperature converter demo
runTemperatureConverterDemo();
```

### Exercise 3 Solution: Grade Analysis System

```typescript
// src/grade-analysis.ts

// Define types for the grade system
type Student = {
    id: string;
    name: string;
};

type Assignment = {
    id: string;
    name: string;
    maxScore: number;
};

type Grade = {
    studentId: string;
    assignmentId: string;
    score: number;
};

type StudentSummary = {
    student: Student;
    averageGrade: number;
    letterGrade: string;
    assignments: {
        assignment: Assignment;
        score: number;
        percentage: number;
    }[];
};

// Class to manage the gradebook
class Gradebook {
    private students: Student[] = [];
    private assignments: Assignment[] = [];
    private grades: Grade[] = [];

    // Add a student to the class
    addStudent(id: string, name: string): void {
        // Check if student ID already exists
        if (this.findStudentById(id)) {
            console.error(`Error: Student with ID ${id} already exists`);
            return;
        }

        this.students.push({ id, name });
        console.log(`Student added: ${name} (ID: ${id})`);
    }

    // Add an assignment to the class
    addAssignment(id: string, name: string, maxScore: number): void {
        // Validate maxScore
        if (maxScore <= 0) {
            console.error("Error: Maximum score must be positive");
            return;
        }

        // Check if assignment ID already exists
        if (this.findAssignmentById(id)) {
            console.error(`Error: Assignment with ID ${id} already exists`);
            return;
        }

        this.assignments.push({ id, name, maxScore });
        console.log(`Assignment added: ${name} (ID: ${id}, Max Score: ${maxScore})`);
    }

    // Record a grade for a student's assignment
    recordGrade(studentId: string, assignmentId: string, score: number): void {
        // Validate that student exists
        const student = this.findStudentById(studentId);
        if (!student) {
            console.error(`Error: Student with ID ${studentId} not found`);
            return;
        }

        // Validate that assignment exists
        const assignment = this.findAssignmentById(assignmentId);
        if (!assignment) {
            console.error(`Error: Assignment with ID ${assignmentId} not found`);
            return;
        }

        // Validate score
        if (score < 0 || score > assignment.maxScore) {
            console.error(`Error: Score must be between 0 and ${assignment.maxScore}`);
            return;
        }

        // Check if a grade already exists for this student and assignment
        const existingGradeIndex = this.grades.findIndex(
            g => g.studentId === studentId && g.assignmentId === assignmentId
        );

        if (existingGradeIndex >= 0) {
            // Update existing grade
            this.grades[existingGradeIndex].score = score;
            console.log(`Updated grade for ${student.name} on "${assignment.name}": ${score}/${assignment.maxScore}`);
        } else {
            // Add new grade
            this.grades.push({ studentId, assignmentId, score });
            console.log(`Recorded grade for ${student.name} on "${assignment.name}": ${score}/${assignment.maxScore}`);
        }
    }

    // Calculate the average grade for a student (as a percentage)
    calculateStudentAverage(studentId: string): number {
        const student = this.findStudentById(studentId);
        if (!student) {
            console.error(`Error: Student with ID ${studentId} not found`);
            return 0;
        }

        const studentGrades = this.grades.filter(grade => grade.studentId === studentId);
        if (studentGrades.length === 0) {
            return 0; // No grades yet
        }

        let totalPercentage = 0;
        studentGrades.forEach(grade => {
            const assignment = this.findAssignmentById(grade.assignmentId);
            if (assignment) {
                totalPercentage += (grade.score / assignment.maxScore) * 100;
            }
        });

        return totalPercentage / studentGrades.length;
    }

    // Calculate the class average (as a percentage)
    calculateClassAverage(): number {
        if (this.students.length === 0 || this.grades.length === 0) {
            return 0; // No students or no grades yet
        }

        let totalAverage = 0;
        let studentsWithGrades = 0;

        this.students.forEach(student => {
            const average = this.calculateStudentAverage(student.id);
            if (average > 0) {
                totalAverage += average;
                studentsWithGrades++;
            }
        });

        return studentsWithGrades > 0 ? totalAverage / studentsWithGrades : 0;
    }

    // Convert a numerical grade to a letter grade
    getLetterGrade(percentage: number): string {
        if (percentage >= 90) return "A";
        if (percentage >= 80) return "B";
        if (percentage >= 70) return "C";
        if (percentage >= 60) return "D";
        return "F";
    }

    // Find the highest performing student
    findHighestPerformer(): Student | null {
        if (this.students.length === 0) {
            return null;
        }

        let highestAverage = -1;
        let highestPerformer: Student | null = null;

        this.students.forEach(student => {
            const average = this.calculateStudentAverage(student.id);
            if (average > highestAverage) {
                highestAverage = average;
                highestPerformer = student;
            }
        });

        return highestPerformer;
    }

    // Find the lowest performing student (among those with grades)
    findLowestPerformer(): Student | null {
        if (this.students.length === 0) {
            return null;
        }

        let lowestAverage = 101; // Higher than possible percentage
        let lowestPerformer: Student | null = null;

        this.students.forEach(student => {
            const average = this.calculateStudentAverage(student.id);
            if (average > 0 && average < lowestAverage) {
                lowestAverage = average;
                lowestPerformer = student;
            }
        });

        return lowestPerformer;
    }

    // Generate a summary for a student
    generateStudentSummary(studentId: string): StudentSummary | null {
        const student = this.findStudentById(studentId);
        if (!student) {
            console.error(`Error: Student with ID ${studentId} not found`);
            return null;
        }

        const average = this.calculateStudentAverage(studentId);
        const letterGrade = this.getLetterGrade(average);
        
        const assignmentResults = this.assignments.map(assignment => {
            const grade = this.findGrade(studentId, assignment.id);
            const score = grade ? grade.score : 0;
            const percentage = grade ? (score / assignment.maxScore) * 100 : 0;
            
            return {
                assignment,
                score,
                percentage
            };
        });

        return {
            student,
            averageGrade: average,
            letterGrade,
            assignments: assignmentResults
        };
    }

    // Generate a class report
    generateClassReport(): void {
        if (this.students.length === 0) {
            console.log("No students in the class");
            return;
        }

        const classAverage = this.calculateClassAverage();
        const classLetterGrade = this.getLetterGrade(classAverage);
        
        console.log("===== Class Report =====");
        console.log(`Total Students: ${this.students.length}`);
        console.log(`Total Assignments: ${this.assignments.length}`);
        console.log(`Class Average: ${classAverage.toFixed(2)}% (${classLetterGrade})`);
        
        // Find and display highest and lowest performers
        const highestPerformer = this.findHighestPerformer();
        const lowestPerformer = this.findLowestPerformer();
        
        if (highestPerformer) {
            const highestAverage = this.calculateStudentAverage(highestPerformer.id);
            console.log(`Highest Performer: ${highestPerformer.name} (${highestAverage.toFixed(2)}%)`);
        }
        
        if (lowestPerformer) {
            const lowestAverage = this.calculateStudentAverage(lowestPerformer.id);
            console.log(`Lowest Performer: ${lowestPerformer.name} (${lowestAverage.toFixed(2)}%)`);
        }
        
        // Display student summaries
        console.log("\n===== Student Summaries =====");
        this.students.forEach(student => {
            const average = this.calculateStudentAverage(student.id);
            const letterGrade = this.getLetterGrade(average);
            console.log(`${student.name}: ${average.toFixed(2)}% (${letterGrade})`);
        });
    }

    // Display detailed information for a student
    displayStudentDetails(studentId: string): void {
        const summary = this.generateStudentSummary(studentId);
        if (!summary) {
            return;
        }

        console.log(`\n===== Student Details: ${summary.student.name} =====`);
        console.log(`ID: ${summary.student.id}`);
        console.log(`Average Grade: ${summary.averageGrade.toFixed(2)}% (${summary.letterGrade})`);
        
        console.log("\nAssignments:");
        summary.assignments.forEach(item => {
            const status = item.score > 0 ? `${item.score}/${item.assignment.maxScore} (${item.percentage.toFixed(1)}%)` : "Not submitted";
            console.log(`- ${item.assignment.name}: ${status}`);
        });
    }

    // Helper method to find a student by ID
    private findStudentById(id: string): Student | undefined {
        return this.students.find(student => student.id === id);
    }

    // Helper method to find an assignment by ID
    private findAssignmentById(id: string): Assignment | undefined {
        return this.assignments.find(assignment => assignment.id === id);
    }

    // Helper method to find a grade for a student and assignment
    private findGrade(studentId: string, assignmentId: string): Grade | undefined {
        return this.grades.find(
            grade => grade.studentId === studentId && grade.assignmentId === assignmentId
        );
    }
}

// Demo function to test the grade analysis system
function runGradeAnalysisDemo(): void {
    console.log("===== Grade Analysis System Demo =====");
    
    const gradebook = new Gradebook();
    
    // Add students
    gradebook.addStudent("S001", "Alice Smith");
    gradebook.addStudent("S002", "Bob Jones");
    gradebook.addStudent("S003", "Charlie Brown");
    gradebook.addStudent("S004", "Diana Miller");
    
    // Try to add a duplicate student
    gradebook.addStudent("S001", "Duplicate Student");
    
    // Add assignments
    gradebook.addAssignment("A001", "Homework 1", 100);
    gradebook.addAssignment("A002", "Quiz 1", 50);
    gradebook.addAssignment("A003", "Midterm Exam", 200);
    
    // Try to add an invalid assignment
    gradebook.addAssignment("A004", "Invalid Assignment", -10);
    
    // Record grades
    gradebook.recordGrade("S001", "A001", 95);
    gradebook.recordGrade("S001", "A002", 48);
    gradebook.recordGrade("S001", "A003", 185);
    
    gradebook.recordGrade("S002", "A001", 88);
    gradebook.recordGrade("S002", "A002", 42);
    gradebook.recordGrade("S002", "A003", 160);
    
    gradebook.recordGrade("S003", "A001", 75);
    gradebook.recordGrade("S003", "A002", 30);
    gradebook.recordGrade("S003", "A003", 140);
    
    // Only record some assignments for Diana
    gradebook.recordGrade("S004", "A001", 92);
    gradebook.recordGrade("S004", "A002", 45);
    
    // Try to record an invalid grade
    gradebook.recordGrade("S004", "A003", 250); // Exceeds max score
    gradebook.recordGrade("S005", "A001", 90);  // Student doesn't exist
    gradebook.recordGrade("S004", "A005", 90);  // Assignment doesn't exist
    
    // Update an existing grade
    gradebook.recordGrade("S003", "A001", 78); // Update Charlie's homework grade
    
    // Generate class report
    gradebook.generateClassReport();
    
    // Display details for each student
    gradebook.displayStudentDetails("S001");
    gradebook.displayStudentDetails("S002");
    gradebook.displayStudentDetails("S003");
    gradebook.displayStudentDetails("S004");
}

// Run the grade analysis demo
runGradeAnalysisDemo();
```

### Exercise 4 Solution: Banking System Simulator

```typescript
// src/banking-system.ts

// Define account types
type AccountType = "Checking" | "Savings";

// Define transaction types
type TransactionType = "Deposit" | "Withdrawal" | "Transfer";

// Define a transaction
type Transaction = {
    id: string;
    type: TransactionType;
    amount: number;
    date: Date;
    description: string;
};

// Define the bank account class
class BankAccount {
    private transactions: Transaction[] = [];
    private nextTransactionId: number = 1;

    constructor(
        private accountId: string,
        private ownerName: string,
        private accountType: AccountType,
        private balance: number = 0
    ) {}

    // Getter methods
    getAccountId(): string {
        return this.accountId;
    }

    getOwnerName(): string {
        return this.ownerName;
    }

    getAccountType(): AccountType {
        return this.accountType;
    }

    getBalance(): number {
        return this.balance;
    }

    // Deposit money into the account
    deposit(amount: number, description: string = "Deposit"): boolean {
        if (amount <= 0) {
            console.error("Error: Deposit amount must be positive");
            return false;
        }

        this.balance += amount;
        
        const transaction: Transaction = {
            id: this.generateTransactionId(),
            type: "Deposit",
            amount,
            date: new Date(),
            description
        };
        
        this.transactions.push(transaction);
        return true;
    }

    // Withdraw money from the account
    withdraw(amount: number, description: string = "Withdrawal"): boolean {
        if (amount <= 0) {
            console.error("Error: Withdrawal amount must be positive");
            return false;
        }

        if (amount > this.balance) {
            console.error("Error: Insufficient funds");
            return false;
        }

        this.balance -= amount;
        
        const transaction: Transaction = {
            id: this.generateTransactionId(),
            type: "Withdrawal",
            amount,
            date: new Date(),
            description
        };
        
        this.transactions.push(transaction);
        return true;
    }

    // Get transaction history
    getTransactionHistory(): Transaction[] {
        return [...this.transactions]; // Return a copy to prevent modification
    }

    // Helper method to generate a transaction ID
    private generateTransactionId(): string {
        return `T${String(this.nextTransactionId++).padStart(6, '0')}`;
    }
}

// Define the bank class to manage multiple accounts
class Bank {
    private accounts: BankAccount[] = [];
    private nextAccountId: number = 1;

    // Create a new bank account
    createAccount(
        ownerName: string, 
        accountType: AccountType, 
        initialDeposit: number = 0
    ): BankAccount {
        if (initialDeposit < 0) {
            console.error("Error: Initial deposit cannot be negative");
            initialDeposit = 0;
        }

        const accountId = this.generateAccountId();
        const account = new BankAccount(accountId, ownerName, accountType, initialDeposit);
        
        // If initial deposit is positive, record it as a transaction
        if (initialDeposit > 0) {
            account.deposit(initialDeposit, "Initial deposit");
        }
        
        this.accounts.push(account);
        console.log(`Account created: ${accountType} account for ${ownerName} (ID: ${accountId})`);
        
        return account;
    }

    // Find an account by ID
    findAccountById(accountId: string): BankAccount | undefined {
        return this.accounts.find(account => account.getAccountId() === accountId);
    }

    // Find accounts by owner name
    findAccountsByOwner(ownerName: string): BankAccount[] {
        return this.accounts.filter(
            account => account.getOwnerName().toLowerCase().includes(ownerName.toLowerCase())
        );
    }

    // Get all accounts
    getAllAccounts(): BankAccount[] {
        return [...this.accounts]; // Return a copy to prevent modification
    }

    // Calculate total funds across all accounts
    calculateTotalFunds(): number {
        return this.accounts.reduce((sum, account) => sum + account.getBalance(), 0);
    }

    // Transfer money between accounts
    transferFunds(
        fromAccountId: string, 
        toAccountId: string, 
        amount: number,
        description: string = "Transfer"
    ): boolean {
        if (fromAccountId === toAccountId) {
            console.error("Error: Cannot transfer to the same account");
            return false;
        }

        if (amount <= 0) {
            console.error("Error: Transfer amount must be positive");
            return false;
        }

        const fromAccount = this.findAccountById(fromAccountId);
        const toAccount = this.findAccountById(toAccountId);

        if (!fromAccount) {
            console.error(`Error: Source account ${fromAccountId} not found`);
            return false;
        }

        if (!toAccount) {
            console.error(`Error: Destination account ${toAccountId} not found`);
            return false;
        }

        // Withdraw from source account
        if (!fromAccount.withdraw(amount, `Transfer to ${toAccountId}: ${description}`)) {
            return false;
        }

        // Deposit to destination account
        toAccount.deposit(amount, `Transfer from ${fromAccountId}: ${description}`);
        
        console.log(`Transferred ${amount} from account ${fromAccountId} to ${toAccountId}`);
        return true;
    }

    // Generate account summaries
    generateAccountSummaries(): void {
        if (this.accounts.length === 0) {
            console.log("No accounts found");
            return;
        }

        console.log("===== Account Summaries =====");
        this.accounts.forEach(account => {
            console.log(`Account ID: ${account.getAccountId()}`);
            console.log(`Owner: ${account.getOwnerName()}`);
            console.log(`Type: ${account.getAccountType()}`);
            console.log(`Balance: ${account.getBalance().toFixed(2)}`);
            console.log("-------------------------");
        });

        console.log(`Total Funds: ${this.calculateTotalFunds().toFixed(2)}`);
    }

    // Generate a detailed statement for an account
    generateAccountStatement(accountId: string): void {
        const account = this.findAccountById(accountId);
        if (!account) {
            console.error(`Error: Account ${accountId} not found`);
            return;
        }

        console.log(`\n===== Account Statement: ${accountId} =====`);
        console.log(`Owner: ${account.getOwnerName()}`);
        console.log(`Type: ${account.getAccountType()}`);
        console.log(`Current Balance: ${account.getBalance().toFixed(2)}`);
        
        const transactions = account.getTransactionHistory();
        
        if (transactions.length === 0) {
            console.log("\nNo transactions found");
        } else {
            console.log("\nTransaction History:");
            transactions.forEach(transaction => {
                console.log(
                    `${transaction.date.toLocaleDateString()} | ` +
                    `${transaction.type} | ` +
                    `${transaction.amount.toFixed(2)} | ` +
                    `${transaction.description}`
                );
            });
        }
    }

    // Helper method to generate an account ID
    private generateAccountId(): string {
        return `A${String(this.nextAccountId++).padStart(6, '0')}`;
    }
}

// Demo function to test the banking system
function runBankingSystemDemo(): void {
    console.log("===== Banking System Demo =====");
    
    const bank = new Bank();
    
    // Create accounts
    const aliceChecking = bank.createAccount("Alice Smith", "Checking", 1000);
    const aliceSavings = bank.createAccount("Alice Smith", "Savings", 5000);
    const bobChecking = bank.createAccount("Bob Jones", "Checking", 2500);
    
    // Try an invalid initial deposit
    const invalidAccount = bank.createAccount("Invalid Account", "Checking", -100);
    
    // Perform transactions
    aliceChecking.deposit(500, "Paycheck deposit");
    aliceChecking.withdraw(200, "ATM withdrawal");
    
    bobChecking.deposit(1000, "Bonus");
    bobChecking.withdraw(300, "Rent payment");
    
    // Try invalid transactions
    aliceChecking.withdraw(10000); // Insufficient funds
    bobChecking.deposit(-50);      // Negative amount
    
    // Transfer funds
    bank.transferFunds(
        aliceSavings.getAccountId(),
        aliceChecking.getAccountId(),
        1000,
        "Monthly transfer"
    );
    
    // Try invalid transfers
    bank.transferFunds(aliceChecking.getAccountId(), "NonExistentAccount", 100);
    bank.transferFunds(aliceChecking.getAccountId(), aliceChecking.getAccountId(), 100);
    
    // Generate account summaries
    bank.generateAccountSummaries();
    
    // Find accounts by owner
    console.log("\n===== Find Accounts by Owner =====");
    const aliceAccounts = bank.findAccountsByOwner("Alice");
    console.log(`Found ${aliceAccounts.length} accounts for Alice:`);
    aliceAccounts.forEach(account => {
        console.log(`- ${account.getAccountId()} (${account.getAccountType()}): ${account.getBalance().toFixed(2)}`);
    });
    
    // Generate account statements
    bank.generateAccountStatement(aliceChecking.getAccountId());
    bank.generateAccountStatement(bobChecking.getAccountId());
}

// Run the banking system demo
runBankingSystemDemo();
```

---

These exercises provide a comprehensive way to apply the TypeScript concepts you've learned in Week 1. Each exercise incorporates multiple aspects including type definitions, functions, classes, error handling, and more. Feel free to modify and extend these exercises to further practice your skills.

When completing the exercises, remember to:
1. Start by understanding the requirements
2. Plan your approach before coding
3. Make use of TypeScript's type system
4. Test your code with various inputs
5. Handle errors and edge cases properly

The solutions provided are thorough implementations to demonstrate how the exercises could be completed, but there are many valid ways to solve these problems. Your own solutions might differ in structure or implementation details while still meeting all the requirements.

---

## Analogies to Help Understand TypeScript Concepts

1. **TypeScript to JavaScript**:
   - TypeScript is like a recipe with precise measurements (types), while JavaScript is like cooking by feel. Both make the same dish, but the TypeScript recipe helps ensure consistency.

2. **Static Typing**:
   - Static typing is like having a GPS that warns you about making a wrong turn before you make it, while dynamic typing is like finding out you're on the wrong road only after you've gone down it.

3. **Type Annotations**:
   - Type annotations are like labels on storage boxes. They help you and others quickly understand what should be inside without having to open the box and check.

4. **Type Inference**:
   - Type inference is like a smart assistant who, after seeing you place books on a bookshelf several times, understands that only books belong there without you having to explicitly say it.

5. **Any Type**:
   - The `any` type is like a wildcard in a card game—it can represent anything, which makes it powerful but potentially disruptive to the rules.

## Exercises for Practice

1. **Basic Type Practice**:
   - Create variables of each basic type (number, string, boolean)
   - Create arrays of different types
   - Create a tuple to represent a 2D point (x, y coordinates)

2. **Function Typing**:
   - Write a function that calculates the area of a rectangle
   - Write a function with optional parameters
   - Write a function with default parameters

3. **Type Conversion**:
   - Create functions to convert between different units (miles to kilometers, hours to minutes, etc.)
   - Handle string to number conversion safely

4. **Gradebook Application**:
   - Extend the student grade tracker to:
     - Add functionality to add new students
     - Calculate class average
     - Find the highest and lowest-performing students

## Summary

This week, you've learned:

1. What TypeScript is and why it's beneficial
2. How to set up a TypeScript development environment
3. Basic types and type annotations
4. Arrays and tuples
5. Type inference
6. How to build simple TypeScript applications

Next week, we'll dive into interfaces, custom types, and object-oriented programming concepts in TypeScript.