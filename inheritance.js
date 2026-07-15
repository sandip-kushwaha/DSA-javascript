// Inheritance
class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    getuser(){
        console.log(`Username is ${this.username} and email is ${this.email}`);
        
    }
}

class Student extends User{
    constructor(username,email, rollno){
        super(username, email);   // acces the user properties
        this.rollno = rollno;
    }
    getstudent(){
        console.log(`student name is ${this.username}, emial ${this.email} and Roll number is ${this.rollno}`);
    }
}
const studentdetails = new Student("sandip", "Sandip@gmial.com", 12);
studentdetails.getstudent()
studentdetails.getuser();
