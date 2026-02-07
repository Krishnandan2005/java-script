// singleton 
// Object.create();


// symbol 
const mySym = Symbol("key1")


// object literals 
console.log("======= +++++ OBJECTS IN JS +++++++ =======");

const JsUser = {
    name: "Krishna",
    "Full Name ": "Krishnandan Kumar",
    age: 21,
    location: "Begusarai , Bihar ",
    email: "krishna@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Mon", "Tue", "Wed"],

    // mySym : "mykey1", ---->>> string 
    [mySym]: "MyrealKey" // **** symbol ka syntax 
}

// as a string he lega 
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["Full Name "]);

// symbol ke form me 
console.log(JsUser[mySym]);
console.log();


JsUser.email = "Krishna@microsoft.com"

// to freeze the object -->> no change from now 
// Object.freeze(JsUser) 

JsUser.email = "krishna@chatgpt.com"

// print the complete object 
console.log(JsUser);

// functions 
JsUser.greeting = function(){
    console.log("Namaste Bihar ");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this["Full Name "]}`);
    
}
console.log(JsUser.greeting);
JsUser.greeting();
console.log(JsUser.greetingTwo());







