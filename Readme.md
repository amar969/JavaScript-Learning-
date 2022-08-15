# Advance JavaScript Learning 

## JavaScript 
JavaScript is an inherently single-threaded language. It was designed in an era in which this was a positive choice; there were few multi-processor computers available to the general public, and the expected amount of code that would be handled by JavaScript was relatively low at that time.

1. [Primitive Data](./Primitive/primitive.js)
    - String 
    - Number
    - Boolean 
    - undefined 
    - null 

2. [Hosting](./Hositing)
    - Javascript <strong>Hositing</strong> refers to the process whereby the interperetor appears to move the declaration of functions, variables or classes to the top of their scopes, prior execution of the code. 
    - Hositing allows functions to be safely used in code before they are declared. 
    - Advantages 
        - It allows you to use the function before you declare the code. 
    - [Hositing reference code](./Hositing/Hositing.js)

    <img src="https://miro.medium.com/max/936/0*1Owmr4IISVyAA-9y.png" /> 

3. [Execution Context, Scopes ](./Execution-Context)
    - Execution context (EC) is defined as the environment in which the JavaScript code is executed. By environment, I mean what variables, objects, functions JavaScript code has access to at a particular time.

4. [CallApplyBind](./CallApplyBind/)

5. [Debounce](./debounce/)