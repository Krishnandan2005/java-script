// primitive string 
const name = "Krishnandan"
const surName = "Yadav"
// console.log(name + surName + " 22 year old boy");


// modern Syntax
console.log(`Hello Everyone this is ${name} ${surName} . I am currently persuing BTech in Electrical Enginnering from MANIT, Bhopal`);
console.log(typeof name);
console.log("================================================");


// new way to construct object string 
const myName = new String('Krishnandan kumar')
console.log(typeof myName);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(0));
console.log(myName.indexOf('k'));
console.log("================================================");

// substring  == does not implement negative indexing
const newString = myName.substring(0,4)
console.log(newString);
console.log("================================================");


// must read about this
// slice allow negative indexing 
const newString2 = myName.slice(-8,17)
console.log(newString2);
console.log("================================================");


// trim == starting and ending unnecessary space remove kr deta hai
const yourName = "    Durgesh Bhai    "
console.log(yourName);
console.log(yourName.trim());
console.log("================================================");



// replace 
const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('Sundar'));
console.log("================================================");







