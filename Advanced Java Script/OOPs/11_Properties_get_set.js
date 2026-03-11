function user(email, password) {

    // first define the property 
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });
    // then assign the value 
    this.email = email;
    this.password = password;
}

const chai = new user("Krish@Zomato.in", "krish@2311");
console.log(chai.email);