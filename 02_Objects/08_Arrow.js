// object ke ander this keyword 
const user = {
    username: "Krishnandan",
    price: 999,

    welcomeMeassage: function () {
        console.log(`${this.username},Welcome to Apple.ios`);
        // console.log(this); // returns user as object 
    }
}
user.welcomeMeassage()
user.username = "Krishna"
user.welcomeMeassage()

// important to note 
// console.log(this)
 // -->> prints : {} because there is now global variable 
// // but if we do console.log(this) in browser it will return "window object"
 
// this keyword inside a function
// function chai(){
//     let username = "Krish"
//     // console.log(this); 
//     console.log(this.username); // return undefined 
    
// }
// chai()

// const Chai = function(){
//     let username = "Krish"
//     console.log(this.username); 
// }
// Chai()


// Arrow Function 
const chai = () => {
    let username = "Krish"
    console.log(this);
    console.log(this.username);
}
chai()


// const AddTwo = (num1,num2) => {
//     return num1 + num2 ;
// }
// console.log(AddTwo(12,25));

// // implicit return 
// const addTwo = (num1,num2) => num1+ num2;
// console.log(addTwo(12,13));

// returning object 
// const addTwo = (num1,num2) => ({username : "Krishna"});
// console.log(addTwo(12,13));


// immediately Invoked Function Expressions (IIFE)
// (function chai (){
//     // named IIFE
//     console.log(`DB connected`);
    
// })();  // this ; is very important to end IIFE
// // because IIFE don't know where to stop context 

// (() => {
//     // uNamed IIFE
//     console.log(`DB connected 2`);
    
// })();

// ((name) => { // name : parameter
//     console.log(`DB connected 3 ${name}`);
    
// })("Krishna"); // krishna : argument 




let val1 = 10
let val2 = 5
function add(num1,num2){
    total = num1 + num2
    return total
}
let result1 = add(val1,val2)
let result2 = add(10,2)