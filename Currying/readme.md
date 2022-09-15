# Currying in JS

It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.The translation of function happens something like this,


```
function simpleFunction(param1, param2, param3, …..) => 
function curriedFunction(param1)(param2)(param3)(….
```


There are two different ways for currying in js 

1. With Bind method 
2. Another with closure 

Let see with bind method,

```
let multiple = function(x,y){
	console.log(x * y)
}


let multipleTwo = multiple.bind(this, 2)
```

Bind give us the copy if multiple method and doesn’t invoke it directly. 

```
// to invoke it 
multipleTwo(5)
// 10

// similarly 

let multipleThree = multiple.bind(this, 3)

multipleThree(5)
// 15
```

This is how we do function currying using the bind method we make a copy of multiple methods and bind it and we create more methods out of it by presetting some argument inside the function. 

1. Another way to achieve currying in JS is with closures.

```
let multiply = function(x){
	return function(y){
		console.log(x * y)
	}
}

let multiplyTwo = multiply(2)
multiplyTwo(3) 
// 6
```