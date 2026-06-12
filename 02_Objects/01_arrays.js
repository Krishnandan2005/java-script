// creating array as object 
const arr = new Array(1, 3, 4, 6)
console.log("Array ",arr);
console.log(typeof arr);
console.log("======================================");
console.log();

// another way of creating array as an object 
const myArray = [2, 3, 4, 5]
console.log("Array ",myArray);
console.log(typeof myArray);
console.log("======================================");
console.log();

// Methods in Array
console.log("======== ++++++ Array Methods ++++++ =======");

// push 
console.log("Push");
myArray.push(10);
myArray.push(12);
console.log(myArray);
console.log();

// pop
console.log("Pop");
myArray.pop();
console.log(myArray);
console.log();

// push into first and then move all other by 1
console.log("Unshift method");
myArray.unshift(11);
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.shift();
console.log(myArray);
console.log();

// question type methods 
console.log(myArray.includes(3));
console.log(myArray.includes(9));
console.log(myArray.indexOf(3));
console.log(myArray.indexOf(9));
console.log();

// array to string 
console.log("Array -- >> string ");
const newArr = myArray.join();
console.log(newArr);
console.log(typeof newArr);
console.log();

// slice and splice
console.log("Slice Function");
console.log("A",myArray);
const myn1=myArray.slice(1,3);
console.log(myn1);
console.log("B",myArray);
console.log();

console.log("Splice method ");
const myn2 = myArray.splice(1,3);
console.log(myn2);
console.log("C",myArray);














