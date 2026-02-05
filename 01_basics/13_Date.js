// DATES 
let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log("=======================================");


// Dates 
// let date = new Date(2026, 0, 23)
// let date = new Date(2026, 1, 23,5 ,3)
let date = new Date("02-05-2026")
console.log(date.toLocaleString());
console.log("=======================================");

// time stamp 
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(date.getTime());
console.log(Math.floor(Date.now()/1000));
console.log("=======================================");

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getTime());

console.log("=======================================");
newDate.toLocaleString('default',{
    weekday : "long",
})









