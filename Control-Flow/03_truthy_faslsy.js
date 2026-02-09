// falsy values : 
// false , 0 , -0 ,BigInt 0n ,null ,undefined ,NaN ,""

// truthy : rest all 
// : "0" ,'false'," ",[],{},function()
const userEmail = "K@krish.ai"
if (userEmail) { // it assumes that string had a value  even space 
    console.log("Got the user Email");
} else {
    console.log("Don't have an user Email");
}

// empty array 
const myArray = []
if (myArray.length === 0) {
    console.log("Array is empty");
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) { // Object.keys(emptyobj) -- >> array 
    console.log("Object is Empty");

}