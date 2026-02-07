const marvel_heros = ["THor", "IronMan", "Wanda", "AntMan"];
const dc_heros = ["Batman", "SuperMan", "Flash"];

// array ke andar array
// array koi bhi data le leta hai
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);

// sprading is preffered over concatinate 
// const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);


// to spread array
const array = [1,2,3,[4,5,6],[7,[8,9]]]
console.log(array);
const new_array=array.flat(Infinity)
console.log(new_array);

// important 
console.log(Array.isArray("Krishnandan"));
console.log(Array.from("Krishnandan Kumar"));
console.log(Array.from({name : "Krish"})); // interesting 

let x = 1000
let y = 2000
let z = 3000
console.log(Array.of(x,y,z));








