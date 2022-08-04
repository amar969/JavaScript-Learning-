# Hositing 
<h3>JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.</h3>

<h3>Hoisting allows functions to be safely used in code before they are declared.</h3>

## Function Hositing 
One of the advantages of hoisting is that it lets you use a function before you declare it in your code

## Variable Hositing 
Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

However JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until the associated line of code is executed. 

## Let and const are Hoisted too 
Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.

## Class Hositing 
Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class. However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a ReferenceError.