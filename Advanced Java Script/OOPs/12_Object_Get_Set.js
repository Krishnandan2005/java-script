const user = {
    email: "Krishna@5344",
    password: "!123#4@56554",

    get _email() {
        return this.email.toUpperCase();
    },

    set _email(value) {
        this.email = value;
    }
}

const tea = Object.create(user)
console.log(tea._email)