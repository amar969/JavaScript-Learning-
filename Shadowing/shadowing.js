// Illegal Shadowing 

let  a = 10 
{
    //var a = 20 
}

// It will throw Syntx Error - It is illegal Shadowing. We can shadow a let using var 
console.log(a)

let b = 20 
{
    let b = 30     
    console.log(b)
}
console.log(b) // It is legal shadowing 

// Var is function bounded
// block scope also follow lexical scope 
// lexical scope similar way in block scope 
