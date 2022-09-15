// this keyword inside methods
let school = {
    name: "R.G.S School",
    printName: function(){
        console.log(this.name)
    }
}

school.printName()



let name = {
    first_name: "Amarjeet", 
    last_name: "Maurya",
}

//this call method
let printLocation = function (place, food) {
    console.log(this.first_name + " " + this.last_name +" is from " + place + ". He loves to eat " + food)  
}

printLocation.call(name, "Mumbai", "Cupcakes")


// this -- apply methods
let name2 = {
    first_name: "Raman", 
    last_name: "Srivastav", 
}

printLocation.apply(name2, ["Nodia", "Samosa"])


// Bind Method
let name3 = {
    first_name: "PikaChu", 
}
let pokemon = function() {
    console.log("I choose you " + this.first_name)
}

let pokemon1 = pokemon.bind(name3) 

pokemon1()

