// ### Math.PI is a read Only property So we can't Change the value 
// console.log(Math.PI);
// Math.PI = 5 // -->> does not change because the property is not writable.
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);

// my own object 
const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("Code Fat gaya ");
        console.log("Chai nhi bani");

    }

}
// check the description for name
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// changing object description for name 
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false // not iterable  --->> true for iterable 
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    // -->> Object.entries() only returns enumerable properties.
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }


}
