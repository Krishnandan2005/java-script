// FIRST PROMISE 
// --->> create an instance of object
const promiseOne = new Promise(function (resolve, reject) {
    // Do an Asyn task -->>  DB calls , cryptography , network  
    setTimeout(function () {
        console.log("Async Task1 is completed");
        resolve("Task Done!")
    }, 1000)
})

promiseOne.then(function (data) {
    console.log(data)
    console.log("Promise Consumed ");
    console.log();
})


// SECOND PROMISE  and modern way to code 
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is completed");
        resolve()
    }, 2000)
}).then(function () {
    console.log("Async task 2 Promise is consumed");
    console.log();
})


// THIRD PROMISE 
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Krishna ", email: "Krish@google.com" })
    }, 3000)
})

promiseThree.then(function (user) {
    console.log(user);
    console.log(user.username);
    console.log();
})

// FOURTH PROMISE 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Krish", password: "Kris@2002" })
        } else {
            reject("Error : Something went wrong !!!")
        }
    }, 4000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username;})
.then((username) => {
    console.log(username);})
.catch(function (error) {
    console.log(error);})
.finally(function () {
    console.log("The promise4 is either resolved or rejected ");
    console.log();
})

// PROMISE FIVE
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Java-Script", password: "#JS@2002" })
        } else {
            reject("Error : Something went wrong for JS !!!")
        }
    }, 5000)
})

async function consumePromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        console.log();
    }

}
consumePromiseFive()


 // Get all Users 
async function getAllUsers(params) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E : ", error);
    }
}
getAllUsers()

// doing same by fetch 
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

