// for of loop 
// ["","",""] --->> Array of string 
// [{},{},{}] --->> Array of objects

const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    console.log(element);
}

const greetings = "Hello Bachhon"
for (const element of greetings) {
    console.log(element);
}

// maps  -->> an object in JS (Key-value pair)
const map = new Map()
map.set('IN', "India")
map.set('USA', "Unites States Of America")
map.set('JP', "Japan")
// console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    "game1" : "Ant-man",
    "game2" :"Spider-man"
}
for (const [key, value] of myObj) {
    console.log(key, ':-', value);
}

