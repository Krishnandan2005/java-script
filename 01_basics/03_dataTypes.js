let score = "33abc"

// 2 ways to know the type  
console.log(typeof score)
console.log(typeof(score))
console.log();


let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) // Number
console.log(valueInNumber) // NaN
console.log();


let temp = null
console.log(temp)
console.log(Number(temp))
console.log();


// NOTES 
// "33" => 33 
// "33abc" => NaN (Not a Number)
// true = 1 && false = 0


let isLogedIn = 3
let boolLoggedIn = Boolean(isLogedIn)
console.log(isLogedIn)
console.log(boolLoggedIn)
console.log();

let name = "krishna"
let boolname = Boolean(name)
console.log(name)
console.log(boolname)
console.log();

// 1 = true 0=false 
//""=false "hnhk"=true

let x = 33
let NumbertoString = String(x)
console.log(NumbertoString)
console.log(typeof NumbertoString);
console.log();

