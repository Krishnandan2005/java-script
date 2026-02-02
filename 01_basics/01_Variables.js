const accountId = 144553
let accountEmail = "krishna@google.com"
var accountPassword = "12345678"
accountCity = "Patna"
let accountState

// accountId = 1223 ---> not allowed 

console.log(accountId);

accountEmail = "Nadan@google.com"

accountPassword = "242234"

accountCity = "Begusarai"

console.log(accountEmail);

console.log(accountPassword);

console.log(accountCity);

// data in trabular form 
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope  

*/