let object = {
    name: "Amarjeet",
    city: "Azamgarh", 
    getIntro: function(){
        console.log(this.name + " from " + this.city)
    }
}

object.getIntro()


const solve = () => {
    console.log("Hello world")
}

solve()
console.log(typeof(solve))