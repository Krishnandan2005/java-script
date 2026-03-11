class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName : ${this.username}`);
        
    }
   static createID(){
        return `261130#${this.username}&`
    }
}

// const chai = new user("Krishnandan")
// console.log(chai.createID()); no access due to static

class teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("Ipad","Apple.ios")
iphone.logMe()
// iphone.createID() -->> no access 
