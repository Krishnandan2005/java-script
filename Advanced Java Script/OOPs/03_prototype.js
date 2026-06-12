// add a new method to every string to have true length
String.prototype.trueLength = function () {
    console.log(`True Length of ${this} is : ${this.trim().length}`);
}
const name = "Krishna    "
console.log(`Total length of ${name} is : ${name.length}`);
name.trueLength();
"Ramayana".trueLength();
console.log();


let myHeros = ["thor", "spiderman"] // array 
let heroPower = {    // object
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// a new method name hitesh to every object 
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// a new method name heyHitesh to every array
Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh() // -->> give error because it is not an array


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