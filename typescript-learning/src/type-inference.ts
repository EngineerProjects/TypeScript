//TypeScript infers these types when you declare and initialize a variable in the same statement.
let inferred1 = 42 // number
let inferred2 = 'hello' // string
let inferred3 = [1, 2, 3] // number[]     
let inferred4 = true // boolean
let inferred5 = null // any (careful!)

// Tupe inference in functions
function multiply(a: number, b: number) {
    // return type is inferred as number
    return a * b;
}

// TypeScript can infer complex types
let inferred6 = {name: 'John', age: 30}; // {name: string, age: number}

// Type inference with generics
let inferred7 = [1, 2, 3].map(n => n.toString()); // string[]

// contextual typing
document.addEventListener('click', function(event) {
    // event is inferred as MouseEvent
    console.log(event.button); // OK
    
    //console.log(event.keyCode); // Error: Property 'keyCode' does not exist on type 'MouseEvent'
})

console.log(inferred1, inferred2, inferred3, inferred4, inferred5, inferred6, inferred7);