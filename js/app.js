'use strict';

// creating and array to store all employees objects
const allUser=[];

// creating a constructer
function Employee(employeeID, fullName, department, level, imgUrl, salary){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgUrl = imgUrl;
    this.salary = salary;
    allUser.push(this);    
}

// method to generating a random number between the minimum and maximum salary for each level
/*
Level  	   Min     	Max
Senior	   1500	    2000
Mid-Senior 1000	    1500
Junior	   500	    1000
 */
// generating a random number for all levels
function salarylevel(max,min){
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// prototype to calculate employee salary
Employee.prototype.calculateSalary = function(){
    (this.level.toLowerCase() === "senior")? this.salary = salarylevel(1500,2000):
        (this.level.toLowerCase() === "mid-senior")? this.salary = salarylevel(1000,1500):
               this.salary = salarylevel(500,1000);
}

// create an instances, a copies of the object Employee
let id=10;
const user1 = new Employee(id++,"Malek Hamdan","Administration","Senior","/images/pic.png",0);
const user2 = new Employee(id++,"Joe Mike","Marketing","Junior","/images/pic.png",0);
const user3 = new Employee(id++,"Ruba Ahmad","Finance","Mid-Senior","/images/pic.png",0);
const user4 = new Employee(id++,"Boshra Majad","Development","Mid-Senior","/images/pic.png",0);
const user5 = new Employee(id++,"Hannen Naser","Marketing","Junior","/images/pic.png",0);
const user6 = new Employee(id++,"Mohnad Basel","Development","Mid-Senior","/images/pic.png",0);
const user7 = new Employee(id++,"Amy Smith","Development","Junior","/images/pic.png",0);
const user8 = new Employee(id++,"Khalid Jaber","Development","Junior","/images/pic.png",0);
const user9 = new Employee(id++,"Hadi Jaber","Finance","Junior","/images/pic.png",0);

function invokeCalculateSalary(){
    for(let i=0;i<allUser.length;i++){
        allUser[i].calculateSalary();   
    }
}

// invoke CalculateSalary() to set the salary to all employess
invokeCalculateSalary();

// net salary for the employees
function netSalary(salary){
   return (salary *12)-((salary *12)*7.5)/100;

}

// building a render prototype function
Employee.prototype.render = function(){


}

// to print all users info into the tables
function printUserInfo() {
    
    let table = document.getElementById("myTable");
    console.log("Hello From printinfo")
    //for loop
    for(let i=0; i < allUser.length;i++){
        let row = `<tr>
                    <td>${allUser[i].employeeID}</td>
                    <td>${allUser[i].fullName}</td>
                    <td>${allUser[i].department}</td>
                    <td>${allUser[i].level}</td>
                    <td>${allUser[i].salary}</td>
                   </tr>`
                   table.innerHTML += row;
    }
    //table 2
    let table2 = document.getElementById("myTable2");
    for(let i=0;i< allUser.length;i++){
        let row=`<tr>
        <td>${allUser[i].fullName}</td>
        <td>${allUser[i].salary}</td>
                 </tr>   `
                 table2.innerHTML+=row;
    }

    //table 3
    let table3 = document.getElementById("net-salary");
    for(let i=0;i< allUser.length;i++){
        let row=`<tr>
        <td>${allUser[i].fullName}</td>
        <td>${netSalary(allUser[i].salary)}</td>
                 </tr>   `
                 table3.innerHTML+=row;
    }
  
}

printUserInfo();


