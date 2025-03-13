// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers : ", numbers);

// Alternative way to declare an array of numbers
let moreNumbers: Array<number> = [6, 7, 8, 9, 10];
console.log("More Numbers : ", moreNumbers);

// Array of strings
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Fruits : ",fruits);

// Mixed array (using any - avoid when possible)
let mixed: any[] = [1, "two", 3, "true"];
console.log("Mixed : ", mixed);

// Better alternative to mixed array
let betterMixed: (number | string | boolean)[] = [1, "two", 3, true];
console.log("Better Mixed : ",betterMixed);

// Array Methods
// Push
numbers.push(6);
console.log("Numbers after push : ", numbers);
// numbers.push("seven"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Readonly arrays
let readonlyNumbers: readonly number[] = [1, 2, 3, 4, 5, 6];
// readonlyNumbers.push(7); // Error: Property 'push' does not exist on type 'readonly number[]'.

// Pop
numbers.pop(); // Removes the last element from the array
console.log("Numbers after pop : ", numbers);

// Shift
numbers.shift(); // Removes the first element from the array
console.log("Numbers after shift : ", numbers);

// Unshift
numbers.unshift(0); // Adds an element to the beginning of the array
console.log("Numbers after unshift : ", numbers);

// Splice
moreNumbers.splice(2, 1); // Removes 1 element starting from index 2
console.log("More Numbers after splice : ", moreNumbers);

// Slice
let sliceArray = numbers.slice(1, 3); // Returns a new array with elements from index 1 to 3
console.log("Slice Array : ", sliceArray);

// Concat
let concatArray = numbers.concat(moreNumbers); // Concatenates two arrays
console.log("Concat Array : ", concatArray);

// Tuples - fixed-length arrays with specific types in specific positions
let person: [string, number] = ["John", 30];
console.log("Person : ", person);
console.log(`Name : ${person[0]}, Age : ${person[1]}`);
// person = [30, "John"]; // Error: Type 'number' is not assignable to type 'string'.

// Destructuring a tuple
let [personName, personAge] = person;
console.log(`Destructured - Name : ${personName}, Age : ${personAge}`);

// optionnal elements in tuples
let optionalTuple: [string, number?] = ["Book title"];
console.log("Optional Tuple : ", optionalTuple);

optionalTuple.push(100);
console.log("Optional Tuple after push : ", optionalTuple);

// Named tuples for better readability
let namedPerson: [name: string, age: number] = ["John", 30];
console.log("Named Person : ", namedPerson);