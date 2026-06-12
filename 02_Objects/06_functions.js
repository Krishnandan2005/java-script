// Function definition
function counting(num) {

    // Base case
    if (num == 0) return;

    // Print current number
    console.log(num);

    // Recursive call
    counting(num - 1);
}

// Function call
// counting(5);

// return type 
const sum = function add (x,y){
    console.log(x+y);
}
console.log("Sum :",sum(12,13));


function loginUserMessage(Username = "krish") { // by adding krish we make sure
    //  that it will never be undefined
    return `${Username} Just Logged in`
}
console.log(loginUserMessage("Krishnandan"));
// console.log(loginUserMessage(" ")); --->>   Just Logged in
// console.log(loginUserMessage()); --- >> undefined Just Logged in

// Lec 20 
// important 
// Shopping list -->> when we don't know the number of items 
function calculateCartPrice(val1,val2,...num) {
    return num
}
console.log(calculateCartPrice(200, 300, 400 ,500 ,600 ,700));

// object handling in function
const user = {
    userName: "Krishnandan ",
    price: "1999"
}
function handleObject(obj) {
    console.log(` ${obj.userName} your total payable Amount is ${obj.price}`);
}
handleObject(user)
handleObject({userName :"krish" , price : 399})

// Array Handling 
const myArray = [100, 200, 300, 400, 500]
function printArray(getArray) {
    return getArray
}
console.log(printArray(myArray));

