function setUserName(username){
    // complex DB calls
    this.username=username
    console.log("Called");
    
}

function createUser(username , email , password){
    setUserName.call(this,username)

    this.email = email;
    this.password = password;
}

const chai = new createUser("Chai","chai@fb.com","123#$$312");
console.log(chai);
