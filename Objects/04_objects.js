// Singleton Object 
// const user = new Object() 

// Non-Singleton Object 
const user1 = {}
user1.id = "123abc"
user1.name = "Siddhant"
user1.isLoggedIn = false;

console.log(user1);
console.log(Object.keys(user1)); // --- >> Array
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(user1.hasOwnProperty('isLoggedIn'));




// nested objects 
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

// const obj3 = {obj1,obj2} 
// console.log(obj3);

// target source 
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// most widely used method === >>> Spreading method 
// const obj3 = {...obj1,...obj2}
// console.log(obj3);




