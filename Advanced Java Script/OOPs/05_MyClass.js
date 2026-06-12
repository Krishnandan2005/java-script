// ES6 introduced class keyword 
class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }
    // method
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "Krishna@JpMorgan.co", "123@453")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene 
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

const tea = new User("tea", "Krishna@JpMorgan.co", "184@453")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());