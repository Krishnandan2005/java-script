console.log("====== ++++ Control Flow in Javascript ++++ ======");

if (2 == "2") {
    console.log(" First Executed  ");
}

if (2 === "2") {
    // --->>> will not execute due to data types are different
    console.log(" Second Executed ");
}


// immature coding style 
// implicit scope 
// one must use scope whenever necessary and avoid to act ovesmart
const bal = 1000
if (bal > 500) console.log("test1"),
    console.log("test2");
;


const userLoggedIn = true
const hasDeitCard = true
const loggedInFromGoggle = false;
const loggedInFroEmail = true

if ((userLoggedIn && hasDeitCard) && (loggedInFroEmail || loggedInFromGoggle)) {
    console.log("Your are aloowed for Shopping Here.\n we welcome you to the Apple Store");

}

// nullish coalescing operator (??) : null undefined ===> first value assigned

let val1;
// val1 = 5 ?? 10; // -> first value assigned
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 5 ?? 10 ?? 15;
console.log(val1);


// ternary operator 
// condition ? true : false 
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("More Than 80") : console.log("Less than 80");



