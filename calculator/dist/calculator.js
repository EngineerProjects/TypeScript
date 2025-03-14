"use strict";
// Function to add two numbers
function add(a, b) {
    return a + b;
}
// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}
// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}
// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
// Main calculator function that performs the specified operation
function calculate(a, b, operation) {
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
function displayCalculation(a, b, operation) {
    try {
        const result = calculate(a, b, operation);
        // Determine the operator symbol for display
        let operatorSymbol = "";
        switch (operation) {
            case "add":
                operatorSymbol = "+";
                break;
            case "subtract":
                operatorSymbol = "-";
                break;
            case "multiply":
                operatorSymbol = "×";
                break;
            case "divide":
                operatorSymbol = "÷";
                break;
        }
        console.log(`${a} ${operatorSymbol} ${b} = ${result}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
        else {
            console.error("An unknown error occurred");
        }
    }
}
// Demo function to test the calculator
function runCalculatorDemo() {
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
