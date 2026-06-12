if (2 == "2") console.log("First Executed ");
if (2 === "2") console.log("Second Executed");
// --->>> will not execute due to data types are different


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
iceTeaPrice >= 80 ? console.log("More Than equal to 80") : console.log("Less than 80");