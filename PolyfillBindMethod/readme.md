# Polyfill for bind method 

Polyfill is a sort of browser fallback. What if suppose the user browser doesn’t have the bind function and we have to write our own bind function. So we have to create our own function 

```
let name = {
	firstname: "Amarjeet",
	lastname: "Maurya", 
}

let printName = function() {
	console.log(this.firstname + " " + this.lastname)
}

let printMyName = printName.bind(name)
printMyName()

```

Above is the working of bind example, suppose we have to write our own bind function. Let see how to do it

```
Function.prototype.mybind = function(...args){
	let obj = this 
			// below params will extract the all elements after args[0]
			params = args.slice(1)
			return function(...args2){
				obj.apply(args[0], [params, ...args2])
			}
}

let printMyName2 = printName.mybind("Dehradun", "Uttarakhand")
printMyName2("India") 

```