// ============ Number ==================
const score = 400
console.log(score);
console.log(typeof score);
console.log("=========================");

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);
console.log("========================");

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log("=======================");

const x = 123.568667556468
console.log(x.toPrecision(3));
console.log("=======================");

const hundreds = 10000000000000000n
console.log(hundreds.toLocaleString('en-IN'));
console.log("=======================");

//  ============ +++++ MATHS ++++++ =============
console.log("============ +++ MATHS +++ =============");
console.log();
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(-4.7));
console.log(Math.min(4,3,6,8,10));
console.log(Math.max(4,3,6,8,10));
console.log();


// important 
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.floor(Math.random()*10)+1));

let min = 1;
let max = 6;

let dice = Math.floor(Math.random() * (max - min + 1) + min);

console.log(dice);












