// Singleton Object 
// const user = new Object() 

// Non-Singleton Object 
const user1 = {}
user1.id = "123abc"
user1.name = "Siddhant"
user1.isLoggedIn = false;

console.log(user1);
console.log(Object.keys(user1)); // --- >> Array of keys 
console.log(Object.values(user1)); // -->> array of values 
console.log(Object.entries(user1)); // Array of key - value pair
console.log(user1.hasOwnProperty('isLoggedIn')); // isLoggedIn present 


// nested objects ==>> object ke andar object 
const regularUser = {
    email : "Krish@Apple.ios",
    fullName : {
        userFullName : {
            firstName : "krishnandan",
            lastName : "Yadav"
        }
    }
}
// console.log(regularUser.fullName.userFullName);


const obj1 = {1: "a",2:"b"}
const obj2 = {3:"A",4:"B"}

// const obj3 = {obj1,obj2}  // --->>> object ke andar object jaisa wapas karega 
// console.log(obj3);

// target-source ke form me 
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// most widely used method === >>> Spreading method 
// const obj3 = {...obj1,...obj2}
// console.log(obj3);




