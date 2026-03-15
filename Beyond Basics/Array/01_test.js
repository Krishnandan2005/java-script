// const myArr = []
// %DebugPrint(myArr)

const arr2 = [1,2,3,4,5] // -->> Packed_SMI_Elements

arr2.push(6.0)  // -->> Packed_Double_Elements 

arr2.push("7")  // -->> Packed_Element 

// Packed -->> Holey --->> Introduce gap 

arr2[10] = 11  // it become Holey_Elements now  (As gap in between )

console.log(arr2);
console.log(arr2.length);
console.log(arr2[9]);

// Bound Check -->> if out of bound -->> undefined 

// for arr2[9]
// bound check 
// hasOwnProerty(arr2,9)
// hasOwnProerty(arr2.prototype,9)
// hasOwnProerty(Object.prototype,9)

//so holes are very expensive in JS

console.log();

const arr3 = [1,2,3,4,5,6,7,8]
console.log(arr3[2]);
