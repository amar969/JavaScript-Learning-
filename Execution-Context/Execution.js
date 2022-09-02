let b = 20; 
var a = 10;

function functionA() {
	var c = 20
	console.log("Start function A");

	function functionB(){
		var d = 30
		console.log(d);
		console.log(c);
	}

	functionB();

}

console.log(a)

functionA();

console.log("GlobalContext");


let outputElem = document.getElementById("output");

let userLanguages = {
  "Mike": "en",
  "Teresa": "es"
};

function greetUser(user) {
  function localGreeting(user) {
    let greeting;
    let language = userLanguages[user];

    switch(language) {
      case "es":
        greeting = `¡Hola, ${user}!`;
        break;
      case "en":
      default:
        greeting = `Hello, ${user}!`;
        break;
    }
    return greeting;
  }
  outputElem.innerHTML += `${localGreeting(user)}<br>\r`;
}

greetUser("Mike");
greetUser("Teresa");
greetUser("Veronica");