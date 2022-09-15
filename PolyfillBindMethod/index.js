let name = {
	firstname: "Amarjeet",
	lastname: "Maurya", 
}

let printName = function(city, state, country) {
	console.log(this.firstname + " " + this.lastname + ", " + city + ", " + state + ", " + country)
}

let printMyName = printName.bind(name, "Dehradun", "Uttarakhand")
printMyName("India")




Function.prototype.mybind = function(...args){
	let obj = this 
			// below params will extract the all elements after args[0]
			params = args.slice(1)
			return function(...args2){
				obj.apply(args[0], [...params, ...args2])
			}
}

let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand")
printMyName2("India") 
