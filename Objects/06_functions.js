function counting(num) {
    // Base Case: Stops the function from running forever
    if (num == 0) return;

    // Action: Print the current number
    console.log(num);

    // Recursive Call: Call the function again with a smaller number
    counting(num - 1);
}
counting(5);
console.log();


function loginUserMessage(Username = "krish") { // by adding krish we make sure
    //  that it will never be undefined
    return `${Username} Just Logged in`
}
console.log(loginUserMessage("Krishnandan"));
console.log();
// console.log(loginUserMessage(" ")); --->>   Just Logged in
// console.log(loginUserMessage()); --- >> undefined Just Logged in


// important 
// Shopping list -->> when we don't know the number of items 
function calculateCartPrice(...num) {
    return num
}
console.log(calculateCartPrice(200, 3000, 456));
console.log();


// object handling in function
const user = {
    userName: "Krishnandan ",
    price: "1999"
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(user)
console.log();


// Array Handling 
const myArray = [100, 200, 300, 400, 500]
function printArray(getArray) {
    return getArray
}
console.log(printArray(myArray));

