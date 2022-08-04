catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}

// Because of hoisting we can use function even before the execution line of code

// Without Hoisting we have to write the same code 

function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("Tiger");

// Variable Hositing

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.

console.log(num1); // Returns 'undefined' from hoisted var declaration (not 6)
var num1 = 6; // Initialization and declaration.
console.log(num1); // Returns 6 after the line with initialization is executed.

console.log(num2); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
num2 = 6; // Initialization

// Let 

console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization