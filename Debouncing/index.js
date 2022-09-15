let count = 0 

const getData = () => {
    console.log("Fetching Data", count++)
}

const debouncing = function(fn, delay){
    let timer; 
    return function() {
        let context = this 
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData.apply(context, arguments)
        }, delay)
    }
    
}

const betterFunction = debouncing(getData(), 300)


let counter = 0
const withoutDebouncing = () => {
    console.log("Fetching Data...", counter++ )
}