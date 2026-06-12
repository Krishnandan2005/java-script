var c = 30

if (true) {
    const a = 20;
    let b = 30;
    var c = 50;
    console.log("Inside a : ", a);
    console.log("Inside b : ", b);

}

// console.log(a); ---->> ReferenceError: a is not defined
// console.log(b); --->>> ReferenceError: b is not defined
// console.log(c);


function one() {
    const userName = "Krishna"
    function two() {
        const website =" apple.ios"
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Krishnandan "
    if(true){
        const website = "microsoft.google"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++  Interesting ++++++++++++++++

console.log(AddOne(5)); // runs fine 
function AddOne(num){
    return num + 1
}

// console.log(AddTwo(5)); // --->>> ReferenceError: Cannot access
//  'AddTwo' before initialization
const AddTwo = function(num){
    return num + 2;
}
console.log(AddTwo(5));



