// primitive 
const score = 1000 
const scoreValue = 10000.335
const bigNum = 32n

// Array 
const heros  = ["Shaktimaan " ,"Nagraj" ,"Doga"]

// Objects 
let myObj = {
    name : "krishna",
    age :  21
}

// functions 
const myFunction = function(){
    console.log("Hello World ");
    
}

// typeof 
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof bigNum);
console.log();


console.log(typeof heros);

console.log(typeof myObj);

console.log(typeof myFunction);
console.log();



// notes 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);
console.log(id == anotherId);

