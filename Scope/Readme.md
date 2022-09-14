# Scope 


The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

JavaScript has the following kinds of scopes:

#### Global scope: The default scope for all code running in script mode.
#### Module scope: The scope for code running in module mode.
#### Function scope: The scope created with a function.

In addition, variables declared with let or const can belong to an additional scope:

#### Block scope: The scope created with a pair of curly braces (a block).

A function creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

## Lexical Environment 

Lexical environment is the local memory along the lexical enivornment of its parent. 

Lexical means heirarchy or sequence, in order. 

```

function a(){
    var b = 10; 
    c();
    function c(){
    }
}

a()

```

So we can say c function is lexically sitting inside the a function. 

a function lexical sitting inside the global. 

global also reference to its parents. But points to null. Because it has no parents. 

This way of searching to parent lexical scope is called as scope chain.

# Lexical Env is => Local Memory + Lexical environment of its parents. 
Parents where the code sits. For example in above code c inside a. And a is inside the global. 
