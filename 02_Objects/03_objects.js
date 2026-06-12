// Singleton   // object.create 

const mySym = Symbol("key1")

// object literals  --- creation 
const JsUser = {
    name: "Krishna",
    "Full Name": "Krishnandan Kumar", // isko . ka use krke access nhi kr sakte
    age: 21,
    location: "Begusarai , Bihar ",
    email: "krishna@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Mon", "Tue", "Wed"],
    // mySym : "mykey1", ---->>> string 
    [mySym]: "MyrealKey" // **** symbol ka syntax 
}

//  Accessing 
console.log(JsUser.name);
console.log(JsUser["Full Name"]);

// symbol ke form me 
console.log(JsUser[mySym]);
console.log(typeof mySym);

// to freeze the object -->> no change from now 
// Object.freeze(JsUser) 
JsUser.email = "Krishna@microsoft.com"

// print the complete object 
console.log(JsUser);

// functions 
JsUser.greeting = function ramu(){  
    console.log("Namaste Bihar ");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this["Full Name "]}`);
    
}

// print 
console.log(JsUser.greeting); // print function reference 
JsUser.greeting();
console.log(JsUser.greetingTwo()); // no return value so undefined