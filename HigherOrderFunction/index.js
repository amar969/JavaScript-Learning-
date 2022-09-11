let radius = [3,4,5,3,2]

// const CalculateRadius = (radius) => {
//     let out = []
//     for(let i=0; i<radius.length; i++){
//         out.push( Math.PI * radius[i] * radius[i])
//     }

//     return out
// }

// console.log(CalculateRadius(radius))


// const CalculateCircumference = (radius) => {
//     let out = []
//     for(let i=0; i<radius.length; i++){
//         out.push( 2 * Math.PI * radius[i] )
//     }

//     return out
// }

// console.log(CalculateCircumference(radius))

// const CaclulateDiameter = (radius) => {
//     let out = []
//     for(let i=0; i<radius.length; i++){
//         out.push(2 * radius[i])
//     }
//     return out
// }

// console.log(CaclulateDiameter(radius))


// refactor our code 


// below all are callback functions
const area = (radius) => {
    return Math.PI * radius * radius
}

const diameter = (radius) => {
    return 2 * radius
}

const circumference = (radius) => {
    return 2 * Math.PI * radius
}


// Calculate is Higher Order functions
const calculate = (radius, logic) => {
    let out = []
    for(let i=0; i<radius.length; i++){
        out.push(logic(radius[i]))
    }
    return out
}

// lets convert the above code in map type we just to convert it into polymor form 

Array.prototype.calculate = function (logic){
    let out = []
    for(let i=0; i<this.length; i++){
        out.push(logic(this[i]))
    }
    return out
}

// Above is code is small copy of Map functions let see how 

console.log(radius.map(area))


console.log(calculate(radius, area))
console.log(radius.calculate(area))
// console.log(calculate(radius, diameter))
// console.log(calculate(radius, circumference))


const arr = [10, 5, 8, 3, 20]

const double = (x) => {
    return (x * 2)
}

let doubleArr = arr.map(double)
console.log(doubleArr)

const triple = (x) => {
    return (x * 3)
}
console.log(arr.map(triple))

const binary = (x) => {
    return x.toString(2)
}
console.log(arr.map(binary))

// shortest form of binary arr 
console.log(arr.map((x) => x.toString(2)))

// filter 

function isOdd(x){
    return x % 2; 
}

function isEven(x){
    return x % 2 === 0
}

function greaterThan4(x){
    return x > 4
}

const isEvenArr = arr.filter(isEven)
const isOddArr  = arr.filter(isOdd)
console.log(isEvenArr)
console.log(isOddArr)
console.log(arr.filter(greaterThan4))


const findSum = (arr) => {
    let sum = 0 
    for(let i=0; i<arr.length; i++) sum += arr[i]
    console.log(sum)
}

findSum(arr)


// Reduce
const reduceFunction = arr.reduce(function (acc, cur){
    acc = acc + cur
    return acc
}, 0)

console.log(reduceFunction)

const maxm = arr.reduce(function (acc, cur){
    acc = Math.max(acc, cur)
    return acc
}, 0)
console.log(maxm)


const user = [
    {firstname: "Amarjeet", age: 26}, 
    {firstname: "Ankita", age: 18}, 
    {firstname: "Amar", age: 21}
]



const names = user.filter( x => x.age < 20).map((x) => x.firstname)
const fname = user.reduce(function (acc, cur){
    if(cur.age < 20) {
        acc.push(cur.firstname)
    }
    return acc
}, [])
console.log(names)
console.log(fname)