class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        return `${this._password.toUpperCase()}851132`
    }

    set password(value) {
        this._password = value
    }
}

const chai = new user("Krish@Zomato.in", "krish@2311")
console.log(chai.password);
