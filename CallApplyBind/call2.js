let name4 = {
	firstname: "Amarjeet", 
	lastname: "Maurya",

	printFullName: function(){
		console.log(this.firstname + " "  + this.lastname)
	}
}

name4.printFullName()
// output -> Amarjeet Maurya

let name5 = {
	firstname: "Sachin", 
	lastname : "Tendulkar"
}

name.printFullName.call(name5)

let printFullName = function() {
	console.log(this.firstName + " " + this.lastName )
}

printFullName.call(name)
// Amarjeet Maurya 

printFullName.call(name2)
// Sachin Tendulkar

let printFullNameWithHomeTown = function(hometown){
	console.log(this.firstName  + " " + this.lastName + " from " + hometown)
}

printFullNameWithHomeTown.call(name, "Dehradun")
// Amarjeet Maurya from Dehradun

printFullNameWithHomeTown.apply(name2, ["Mumbai"])
// Sachin Tendulkar from Mumbai

let printMyNameWithHomeTown = printFullName.bind(name2, "Mumbai")
// to invoke it we can call later
printMyNameWithHomeTown()