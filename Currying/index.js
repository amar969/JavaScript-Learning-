let multiple = function(x,y){
	console.log(x * y)
}


let multipleTwo = multiple.bind(this, 2)

// to invoke it 
multipleTwo(5)
// 10

// similarly 

let multipleThree = multiple.bind(this, 3)

multipleThree(5)
// 15

let multiply = function(x){
	return function(y){
		console.log(x * y)
	}
}

let multiplyTwo = multiply(2)
multiplyTwo(3) 
// 6