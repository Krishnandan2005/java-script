// // object literals 
// const user = {
//     username: "Krishna ",
//     login_count: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         console.log("Got user Details from DataBase :- ");
//         console.log(this);
//         console.log(`username : ${this.username}`);
//         console.log();
//     }
// }
// user.getUserDetails();

// constructor function 
function user(username, logincount, isLoggedIn) {
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this; // --->>> implicitly defined need not be used
}

const user1 = new user("Siddhant", 12, true);
const user2 = new user("zaid", 19, false);
console.log(user1); // --->>> give user 2 details only (without new)
console.log(user2);
console.log(user2.greeting());
console.log(user2.constructor); // function 
