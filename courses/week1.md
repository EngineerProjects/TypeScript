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

## Day 5: Practical Exercises

Let's apply what you've learned with some practical exercises:

### Exercise 1: Temperature Converter

Create a program that converts between Celsius and Fahrenheit.

```typescript
// src/temperature-converter.ts

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

// Test the functions
const celsiusTemperature: number = 25;
const fahrenheitTemperature: number = 77;

console.log(`${celsiusTemperature}°C is ${celsiusToFahrenheit(celsiusTemperature).toFixed(2)}°F`);
console.log(`${fahrenheitTemperature}°F is ${fahrenheitToCelsius(fahrenheitTemperature).toFixed(2)}°C`);
```

### Exercise 2: Student Grade Tracker

Create a program to track and calculate student grades.

```typescript
// src/grade-tracker.ts

// Define the structure of a student record
type Student = {
    name: string;
    id: string;
    grades: number[];
};

// Create some example students
const students: Student[] = [
    { name: "Alice", id: "A001", grades: [85, 90, 92, 88] },
    { name: "Bob", id: "B002", grades: [75, 80, 85, 78] },
    { name: "Charlie", id: "C003", grades: [95, 92, 96, 90] }
];

// Function to calculate the average grade for a student
function calculateAverage(grades: number[]): number {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

// Function to get the letter grade based on numerical grade
function getLetterGrade(average: number): string {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

// Display student information with grades
function displayStudentInfo(student: Student): void {
    const average = calculateAverage(student.grades);
    const letterGrade = getLetterGrade(average);
    
    console.log(`Student: ${student.name} (ID: ${student.id})`);
    console.log(`Grades: ${student.grades.join(", ")}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Letter Grade: ${letterGrade}`);
    console.log("------------------------");
}

// Process all students
students.forEach(displayStudentInfo);
```

## Day 6-7: Mini-Project - To-Do List Application

Let's build a simple command-line To-Do list application to practice what you've learned.

```typescript
// src/todo-app.ts

// Define the structure of a task
type Task = {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
};

// Define the structure of our to-do list
class TodoList {
    private tasks: Task[] = [];
    private nextId: number = 1;

    // Add a new task
    addTask(title: string): void {
        const newTask: Task = {
            id: this.nextId++,
            title,
            completed: false,
            createdAt: new Date()
        };
        this.tasks.push(newTask);
        console.log(`Task added: "${title}"`);
    }

    // Mark a task as completed
    completeTask(id: number): void {
        const task = this.findTask(id);
        if (task) {
            task.completed = true;
            console.log(`Task marked as completed: "${task.title}"`);
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    // Remove a task
    removeTask(id: number): void {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        
        if (initialLength !== this.tasks.length) {
            console.log(`Task with ID ${id} removed.`);
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    // List all tasks
    listAllTasks(): void {
        if (this.tasks.length === 0) {
            console.log("No tasks found.");
            return;
        }

        console.log("Tasks:");
        this.tasks.forEach(task => {
            const status = task.completed ? "✓" : "☐";
            const date = task.createdAt.toLocaleDateString();
            console.log(`[${status}] ${task.id}. ${task.title} (Created: ${date})`);
        });
    }

    // List only completed tasks
    listCompletedTasks(): void {
        const completedTasks = this.tasks.filter(task => task.completed);
        
        if (completedTasks.length === 0) {
            console.log("No completed tasks found.");
            return;
        }

        console.log("Completed Tasks:");
        completedTasks.forEach(task => {
            const date = task.createdAt.toLocaleDateString();
            console.log(`✓ ${task.id}. ${task.title} (Created: ${date})`);
        });
    }

    // Helper method to find a task by ID
    private findTask(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }
}

// Example usage
function runTodoApp(): void {
    console.log("To-Do List Application");
    console.log("----------------------");

    const todoList = new TodoList();

    // Add some tasks
    todoList.addTask("Learn TypeScript basics");
    todoList.addTask("Complete TypeScript exercises");
    todoList.addTask("Build a mini-project");
    todoList.addTask("Review week 1 content");

    console.log("\nInitial task list:");
    todoList.listAllTasks();

    // Complete some tasks
    todoList.completeTask(1);
    todoList.completeTask(3);

    console.log("\nAfter completing tasks:");
    todoList.listAllTasks();

    console.log("\nOnly completed tasks:");
    todoList.listCompletedTasks();

    // Remove a task
    todoList.removeTask(2);

    console.log("\nAfter removing a task:");
    todoList.listAllTasks();

    // Try to complete a non-existent task
    todoList.completeTask(10);

    // Try to remove a non-existent task
    todoList.removeTask(10);
}

// Run the application
runTodoApp();
```

## Weekly Challenge: Personal Information Manager

Now, let's create a more complex project that combines everything you've learned:

```typescript
// src/contact-manager.ts

// Define types for our contact manager
type ContactType = "personal" | "work" | "family" | "other";

type Address = {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country?: string; // Optional field
};

type Contact = {
    id: number;
    name: string;
    email: string;
    phone?: string; // Optional field
    type: ContactType;
    address?: Address; // Optional field
    notes?: string; // Optional field
    addedAt: Date;
};

class ContactManager {
    private contacts: Contact[] = [];
    private nextId: number = 1;

    // Add a new contact
    addContact(
        name: string,
        email: string,
        type: ContactType,
        phone?: string,
        address?: Address,
        notes?: string
    ): void {
        const newContact: Contact = {
            id: this.nextId++,
            name,
            email,
            phone,
            type,
            address,
            notes,
            addedAt: new Date()
        };
        
        this.contacts.push(newContact);
        console.log(`Contact added: ${name}`);
    }

    // Update an existing contact
    updateContact(id: number, updatedFields: Partial<Contact>): void {
        const contact = this.findContact(id);
        
        if (contact) {
            // Remove non-updateable fields
            delete updatedFields.id;
            delete updatedFields.addedAt;
            
            // Update the contact
            Object.assign(contact, updatedFields);
            console.log(`Contact ${id} updated successfully.`);
        } else {
            console.log(`Contact with ID ${id} not found.`);
        }
    }

    // Remove a contact
    removeContact(id: number): void {
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        
        if (initialLength !== this.contacts.length) {
            console.log(`Contact with ID ${id} removed.`);
        } else {
            console.log(`Contact with ID ${id} not found.`);
        }
    }

    // Search contacts by name (partial match)
    searchByName(searchTerm: string): Contact[] {
        const results = this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        return results;
    }

    // Filter contacts by type
    filterByType(type: ContactType): Contact[] {
        return this.contacts.filter(contact => contact.type === type);
    }

    // Display all contacts
    listAllContacts(): void {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
            return;
        }

        console.log("All Contacts:");
        this.contacts.forEach(this.displayContact);
    }

    // Display contacts of a specific type
    listContactsByType(type: ContactType): void {
        const filteredContacts = this.filterByType(type);
        
        if (filteredContacts.length === 0) {
            console.log(`No ${type} contacts found.`);
            return;
        }

        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} Contacts:`);
        filteredContacts.forEach(this.displayContact);
    }

    // Display search results
    displaySearchResults(searchTerm: string): void {
        const results = this.searchByName(searchTerm);
        
        if (results.length === 0) {
            console.log(`No contacts found matching "${searchTerm}".`);
            return;
        }

        console.log(`Search results for "${searchTerm}":`);
        results.forEach(this.displayContact);
    }

    // Helper method to find a contact by ID
    private findContact(id: number): Contact | undefined {
        return this.contacts.find(contact => contact.id === id);
    }

    // Helper method to display a contact
    private displayContact = (contact: Contact): void => {
        console.log(`ID: ${contact.id}`);
        console.log(`Name: ${contact.name}`);
        console.log(`Email: ${contact.email}`);
        console.log(`Type: ${contact.type}`);
        
        if (contact.phone) {
            console.log(`Phone: ${contact.phone}`);
        }
        
        if (contact.address) {
            console.log(`Address: ${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zipCode}`);
            if (contact.address.country) {
                console.log(`Country: ${contact.address.country}`);
            }
        }
        
        if (contact.notes) {
            console.log(`Notes: ${contact.notes}`);
        }
        
        console.log(`Added: ${contact.addedAt.toLocaleDateString()}`);
        console.log("---------------------------");
    }
}

// Example usage
function runContactManager(): void {
    console.log("Contact Manager Application");
    console.log("--------------------------");

    const contactManager = new ContactManager();

    // Add various contacts
    contactManager.addContact(
        "John Doe",
        "john.doe@example.com",
        "personal",
        "555-123-4567",
        {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
            country: "USA"
        },
        "My best friend from college"
    );

    contactManager.addContact(
        "Jane Smith",
        "jane.smith@company.com",
        "work",
        "555-987-6543",
        {
            street: "456 Business Ave",
            city: "Workville",
            state: "NY",
            zipCode: "54321"
        }
    );

    contactManager.addContact(
        "Alice Johnson",
        "alice@familydomain.com",
        "family",
        "555-246-8101",
        {
            street: "789 Family Rd",
            city: "Hometown",
            state: "TX",
            zipCode: "67890",
            country: "USA"
        },
        "Sister"
    );

    contactManager.addContact(
        "Bob Brown",
        "bob@example.com",
        "personal"
    );

    contactManager.addContact(
        "Carol White",
        "carol@company.com",
        "work"
    );

    // List all contacts
    console.log("\nListing all contacts:");
    contactManager.listAllContacts();

    // Search for contacts
    console.log("\nSearching for 'jo':");
    contactManager.displaySearchResults("jo");

    // Filter by type
    console.log("\nFiltering work contacts:");
    contactManager.listContactsByType("work");

    // Update a contact
    contactManager.updateContact(2, {
        phone: "555-111-2222",
        notes: "Recently promoted to manager"
    });

    // Check the updated contact
    console.log("\nAfter updating contact 2:");
    contactManager.displaySearchResults("Jane");

    // Remove a contact
    contactManager.removeContact(5);

    // List all contacts after removal
    console.log("\nAfter removing a contact:");
    contactManager.listAllContacts();
}

// Run the application
runContactManager();
```

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