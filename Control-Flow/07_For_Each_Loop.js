const coding = ["JS", "rubby", "Java", "Python", "Cpp"]

// call back function 
// coding.forEach( function (item) {
//     console.log(item);

// } )
// console.log();


// using arrow functio 
// coding.forEach( (val) => {
//     console.log(val);

// } )
// console.log();


// function print(item){
//     console.log(item);

// }
// coding.forEach(print)
// console.log();

// coding.forEach( (item , index , arr) => {
//     console.log(item,index,arr);

// })
// console.log();


const myCoding = [
    {
        languageName: "JavaScript",
        fileName: ".js"
    },
    {
        languageName: "Java",
        fileName: ".J"
    },
    {
        languageName: "C++",
        fileName: ".cpp"
    },
    {
        languageName: "Python",
        fileName: ".py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.fileName);
})


