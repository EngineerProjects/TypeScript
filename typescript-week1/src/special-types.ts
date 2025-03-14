// any - disables type checking (use sparingly!)
let dynamicValue: any = 10;
console.log("Any type number:", dynamicValue);
dynamicValue = 'Hello, world!';
console.log("Any type string:", dynamicValue);
dynamicValue = true;
console.log("Any type bool:", dynamicValue);

// unknown - safer version of any
function getUserInput(): unknown {
    return "Sample user input";
}

let userInput: unknown = getUserInput();
// Need type checking before using unknown values
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}

// void - absence of any type, commonly used for functions that don't return a value
export function logMessage(message: string): void {
    console.log(message);
    // return; // This is optional
}

// never - represents the type of values that never occur
function throwError(message: string): never {
    while (true) {
        // thid function never returns a value
    }
}

// null and undefined - subtypes of all other types
let nullValue: null = null;
let undefinedValue: undefined = undefined;