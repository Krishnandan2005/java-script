const nums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = nums.map( (num) => num+10) 

const newNums = nums
            .map( (num) => num*10) // multiply by 10
            .map( (num) => num + 5) // add 5 
            .filter( (num) => num > 40) // filter the num 
            .map( (num) => num/10) // filtered num devided by 10
 console.log(newNums);
 