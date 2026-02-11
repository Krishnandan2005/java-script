// const nums = [1, 2, 3, 4, 5]

// const initialValue = 0
// const myTotal = nums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator : ${accumulator} and Current value : ${currentValue}`);

//     return accumulator + currentValue
// }, initialValue)

// arrow function for above function
// const myTotal = nums.reduce((accumulator, currentValue) => {
//     console.log(`accumulator : ${accumulator} and Current value : ${currentValue}`);
//     return accumulator + currentValue
// }, initialValue)

// console.log(`Grand Total = ${myTotal}`);



const myShoppingCart = [
    {
        courseName : "JS course ",
        price : 9999
    },
    {
        courseName : "Java course ",
        price : 999
    },
    {
        courseName : "C++ course ",
        price : 999
    },
    {
        courseName : "Mobile Development course ",
        price : 9999
    },
    {
        courseName : "Data Science course ",
        price : 12999
    }
]

const Total = myShoppingCart.reduce( (acc , item ) => acc + item.price,0)
console.log(`Grant total Bill = INR ${Total}`);
