// for in loop ==>> by default sirf key deti hai
// const myObj = {
//     JS : 'JavaScript',
//     Cpp : 'C++',
//     rb : 'Ruby',
//     swift : "swift by Apple"
// }
// for (const key in myObj) {
//    console.log(`${key} is shortcut for ${myObj[key]}`);
// }


// for in loop on array 
// const progLanguage = ["JS", "C++", "rb", "py", "java"]
// for (const key in progLanguage) {
//     console.log(progLanguage[key]);

// }


// maps  -->> an object in JS (Key-value pair)
const map = new Map()
map.set('IN', "India")
map.set('USA', "Unites States Of America")
map.set('JP', "Japan")
// console.log(map);
for (const key in map) {
    console.log(key);
    
}