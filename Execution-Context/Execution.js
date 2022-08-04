var a = 10;

function functionA() {

	console.log("Start function A");

	function functionB(){
		console.log("In function B");
	}

	functionB();

}

functionA();

console.log("GlobalContext");