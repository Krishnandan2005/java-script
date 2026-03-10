let name = "Krishna    "

// add a new method to every string to have true length
String.prototype.trueLength = function () {
    console.log(`${this}`); // -->> string 
    console.log(`True Length is ${this.trim().length}`);
}

console.log(` total length : ${name.length}`);
console.log(` true length : ${name.trim().length}`);
console.log(` true length : ${name.trueLength()}`);
console.log("Ramayana".trueLength());


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// a new method name hitesh to every object 
// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// a new method name heyHitesh to every array
Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() -->> give error because it is not an array


// INHERITENCE 
// old approach 
const user = {
    username: 'chai',
    email: "Chai@google"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvaillable: false
}

const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher__proto__ = user

// modern syntax 
Object.setPrototypeOf(teachingSupport, teacher)