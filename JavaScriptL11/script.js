// let student = {
//     Fname : "Rajesh",
//     Lname : "Kumar",
//     Mark : 99,
//     Roll : 47,
// };


// let arr = [9,8,6,5,3];
// arr.push("litchhi");


// const employee ={
//     calcTax(){
//         console.log("Tax rate is 10%");        
//     },
// }
// const karanArjun = {
//     salary : 5000,
// };

// karanArjun.__proto__ = employee;
 

// class Tyotacar {
//     constructor(brand){
//         console.log("Creating new object");
//         this.brand = brand;
//     }
//     start(){
//         console.log("start");
//     }
//     end(){
//         console.log("end");
//     }
//     setbrand(brand){
//         this.brandName = brand;
//     }
   
// }

// let furtuner = new Tyotacar("Scarpio"); //constructor invoke
// furtuner.constructor("Scarpio"); 

//Small website for *

let data = "secret data";

class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data = ", data);
    }
}

class Admin extends user {
    constructor(name, email){
        super(name, email);
    }

    editData(){
        data = "Add some new data";
    }
}


let student1 = new user("Rajesh", "rk@gmail.com");
let student2 = new user("Rahul", "rg@gmail.com");
let faculty = new user("RY", "ry@gmail.com");

let admin1 = new Admin("Admin", "Admin@gmail.com");
