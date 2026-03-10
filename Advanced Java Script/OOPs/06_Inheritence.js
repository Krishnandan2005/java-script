class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`user_name is ${this.username}`);
        
    }
}

class teacher extends user {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new teacher("Hitesh","Hit@google.com","123@356756734")
chai.addCourses()
chai.logMe()
console.log();


const masalaChai = new user("MasalaChai")
// masalaChai.addCourses() // no access 
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof teacher );
console.log(chai instanceof user );
console.log(teacher instanceof user );

