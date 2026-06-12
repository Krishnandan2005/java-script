const coding = ["JS", "rubby", "Java", "Python", "Cpp"]

// call back function 
// coding.forEach( function (item) {
//     console.log(item);
// } )

// using arrow function 
// coding.forEach( (val) => {
//     console.log(val);
// } )


// function print(item){
//     console.log(item);
// }
// coding.forEach(print)


// coding.forEach( (item , index , arr) => {
//     console.log(item,index,arr);
// })


// *** Important  
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