# Execution Context 

1. Execution context (EC) is defined as the environment in which the JavaScript code is executed. By environment, I mean what variables, objects, functions JavaScript code has access to at a particular time.

## Execution context are of threee types 

1. ### Global execution context (GEC)
  This is the default execution context in which JS code start its execution when the file first loads in the browser. All of the global code i.e. code which is not inside any function or object is executed inside the global execution context. GEC cannot be more than one because only one global environment is possible for JS code execution as the JS engine is single threaded.

2. ### Functional execution context (FEC) 
 Functional execution context is defined as the context created by the JS engine whenever it finds any function call. Each function has its own execution context. It can be more than one. Functional execution context has access to all the code of the global execution context though vice versa is not applicable. While executing the global execution context code, if JS engine finds a function call, it creates a new functional execution context for that function

3. ### Eval Execution
 context inside eval function.


## Execution context stack (ECS)
 Execution context stack is a stack data structure, i.e. last in first out data structure, to store all the execution stacks created during the life cycle of the script. Global execution context is present by default in execution context stack and it is at the bottom of the stack. While executing the global execution context code, if JS engines find a function call, it creates a functional execution context for that function and pushes it on top of the execution context stack. JS engine executes the function whose execution context is at the top of the execution context stack. Once all the code of the function is executed, JS engines pop out that function’s execution context and start’s executing the function which is below it.

 [Execution context]("https://miro.medium.com/max/1400/1*bDebsOuhRx9NMyvLHY2zxA.gif")

### JS engine creates the execution context in the following two stages:
```
1. Creation Phase
2. Execution Phase
```

## Creation Phase - 
Creation phase is the phase in which the JS engine has called a function but its execution has not started. In the creation phase, JS engine is in the compilation phase and it just scans over the function code to compile the code, it doesn’t execute any code.

## Execution Phase - 
In the execution phase, JS engines will again scan through the function to update the variable object with the values of the variables and will execute the code.

 ## Scope 
 Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a program have access to the variable or where the variable is visible.

 Javascript have the following kind of scopes 
#### Global Scope
     When you execute a script, the JavaScript engine creates a global execution context. It also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.

#### Local Scope
    Variables that you declare inside a function are local to that function. They are called Local Variables and can’t be accessed in Global Scope.

#### Block scope
    Variables that you declare inside a block {} using let or const are limited only to that block.


