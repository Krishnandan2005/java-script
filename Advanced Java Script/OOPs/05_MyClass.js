// ES6
console.log("Using Class --->>> ");

class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("Krishna", "Krishna@JpMorgan.co", "123@453")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
console.log();


// behind the scene 
console.log("Using Function --->>> ");
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("Krishna", "Krishna@JpMorgan.co", "123@453")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());