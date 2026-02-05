const name = "Krishnandan"
const surName = "Yadav"
// console.log(name + surName + " 22 year old boy");


// modern Syntax
console.log(`Hello Everyone this is ${name} ${surName} . I am currently persuing BTech in Electrical Enginnering from MANIT, Bhopal`);
console.log();


// new way to 
const myName = new String('Krishnandan Kumar')
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(0));
console.log(myName.indexOf('K'));

const newString = myName.substring(-8,4)
console.log(newString);

// must read about this
const newString2 = myName.slice(-8,17)
console.log(newString2);

// trim == starting and ending unnecessary space remove kr deta hai
const yourName = "    Durgesh Bhai    "
console.log(yourName);
console.log(yourName.trim());

// replace 
const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('Sundar'));







