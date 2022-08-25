function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
function x(){
  var i = 1 
  setTimeout(() => {
    console.log(i)
  }, 1000)
  console.log("Namaste World")
}

x();

// JavaScript will not wait for setTimeout. JS doesn't wait for any one. 
// it will detach the x and put inside the call back queue 
// execute line 17 
// and then execute the setTimeout after the set Timed 


function x(){
  for(var i=0; i<5; i++){
    setTimeout(() => {
      console.log(i)
    }, i *1000);
  }
  console.log("Hello wolrd")
}

// it will console.log(6) every time 

// we can fix this by changing it to let 

// How can we make it work with var 

function x(){
  for(var i=0; i<=5; i++){
    function close(x){
      setTimeout(function(){
        console.log(x)
      }, x * 1000)
    }
    close(i)
  }
  console.log("Namaster World")
}

x()