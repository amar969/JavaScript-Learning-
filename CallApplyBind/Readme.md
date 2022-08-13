# This 

In general, the `this` references the object of which the function is a property. In other words, the `this` references the object that is currently calling the function. In simple words,  `this` references owner object.

Where will you usually declares the variables 
1. Global scope 
2. Inside a function
3. Inside a method( method is a function defined inside of an object )

Understand `this` keyword

- Imagine a person is going to a different room in his house. each room has a specific purpose and we have a tool pointing to the current location of the person. the pointer is flexible, it can take different values but always of some room. we have a name for such pointer, `this`.
- Here, a person is a variable we declared, each room is a different place ( function, method, global scope ) where a person ( variable ) can live and the pointer is `this`

All javascript functions have access to some very special methods which we can use to control where this should refer. Such methods are call(), apply(), bind()

## Call()
call() - provides a new value of this to the function/method

## Apply()
apply() - method is same as call method. they just take the argument differently. 

Call takes individual arguments separated by commas
printObj.call(obj, 20, "Mumbai")
apply takes a single array of arguments 
printObj.bind(obj, [20, "Mumbai"])