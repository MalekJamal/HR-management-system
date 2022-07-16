"use strict";

// creating an array to sotre all objects inside it
const allUser = [];
// creating ID For the users
let id = 1000;
// create a parent element to add childreen element in it
const sectionEl = document.getElementById("sectionId");
sectionEl.style.textAlign = "center";
sectionEl.style.display = "flex-inline";

// creating a constructer
function Employee(employeeID, fullName, department, level, imgUrl, salary) {
  this.fullName = fullName;
  this.employeeID = employeeID;
  this.department = department;
  this.level = level;
  this.imgUrl = imgUrl;
  this.salary = salary;
  allUser.push(this);
}

const user1 = new Employee(
  genrerteID(),
  "Malek Hamdan",
  "Administration",
  "Senior",
  "../assets/cards/Hadi.jpg",
  0
);
const user2 = new Employee(
  genrerteID(),
  "Joe Mike",
  "Development",
  "Junior",
  "../assets/cards/Ghazi.jpg",
  0
);
const user3 = new Employee(
  genrerteID(),
  "Ruba Ahmad",
  "Finance",
  "Mid-Senior",
  "../assets/cards/Lana.jpg",
  0
);
const user4 = new Employee(
  genrerteID(),
  "Boshra Majad",
  "Development",
  "Mid-Senior",
  "../assets/cards/lara.png",
  0
);
const user5 = new Employee(
  genrerteID(),
  "Hannen Naser",
  "Marketing",
  "Junior",
  "../assets/cards/Rana.jpg",
  0
);
const user6 = new Employee(
  genrerteID(),
  "Mohnad Basel",
  "Development",
  "Mid-Senior",
  "../assets/cards/Omar.jpg",
  0
);
const user7 = new Employee(
  genrerteID(),
  "Amy Smith",
  "Marketing",
  "Junior",
  "../assets/cards/Tamara.jpg",
  0
);
const user8 = new Employee(
  genrerteID(),
  "Khalid Jaber",
  "Development",
  "Junior",
  "../assets/cards/Safi.jpg",
  0
);
const user9 = new Employee(
  genrerteID(),
  "Jad Ahmed",
  "Finance",
  "Mid-Senior",
  "../assets/cards/jad.png",
  0
);
const user10 = new Employee(
  genrerteID(),
  "Samer Walid",
  "Marketing",
  "Junior",
  "../assets/cards/samer.png",
  0
);

// calaulate the salary to the employee depending on his/her level
Employee.prototype.calculateSalary = function () {
  this.level.toLowerCase() === "senior"
    ? (this.salary = salaryLevel(1500, 2000))
    : this.level.toLowerCase() === "mid-senior"
    ? (this.salary = salaryLevel(1000, 1500))
    : (this.salary = salaryLevel(500, 1000));
};

// calculate the net salary where the tax percent is 7.5
function netSalary(salary) {
  return salary * 12 - (salary * 12 * 7.5) / 100;
}

function invokeCalculateSalary() {
  for (let i = 0; i < allUser.length; i++) {
    allUser[i].calculateSalary();
  }
}
// invoke CalculateSalary() to set the salary to all employess
invokeCalculateSalary();

//generating a random salary for all levels
function salaryLevel(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to genrete an ID
function genrerteID() {
  return id++;
}
// to render an employee dynmicly by Dom manipulation
Employee.prototype.render = function () {
  // create a title depnding on the department
  let h1TitleEl = document.createElement("h1");
  sectionEl.style.alignContent = "center";
  if (this.department === "Administration") {
    h1TitleEl.textContent = this.department;
  } else if (this.department === "Development") {
    h1TitleEl.textContent = this.department;
  } else if (this.department === "Finance") {
    h1TitleEl.textContent = this.department;
  } else if (this.department === "Marketing") {
    h1TitleEl.textContent = this.department;
  }
 // sectionEl.appendChild(h1TitleEl);

  let divEl = document.createElement("div");
  divEl.className = "card";
  divEl.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
  divEl.style.transition = "0.9s";
  divEl.style.borderRadius = "25px";
  divEl.style.backgroundColor = "gray";
  divEl.style.width = "35%";
  divEl.style.display = "inline-block";
  divEl.style.margin = "20px";
  //divEl.style.alignItems="center";
  //create an img
  let imgEl = document.createElement("img");
  imgEl.src = `${this.imgUrl}`;
  imgEl.alt =`${this.fullName}`;
  imgEl.title =`${this.fullName}`;

  imgEl.style.width = "60%";
  imgEl.style.paddingTop = "25px";
  imgEl.style.borderRadius = "25px";
  sectionEl.appendChild(divEl);
  divEl.appendChild(imgEl);
  // create div 2
  let div2El = document.createElement("div");
  div2El.classList.add("container");
  div2El.style.padding = "2px 16px";
  div2El.style.textAlign = "center";
  //??
  divEl.appendChild(div2El);

  //create <p> to display the name and departmant and level and salary
  let pNameEl = document.createElement("p");
  let pDepartmentEl = document.createElement("p");
  let pSalaryEl = document.createElement("p");
  pNameEl.textContent = `Name : ${this.fullName}-ID: ${this.employeeID}`;
  pDepartmentEl.textContent = `Department: ${this.department} - Level: ${this.level}`;
  pSalaryEl.textContent = `Salary : ${this.salary}`;
  pNameEl.style.fontWeight = "bold";
  pDepartmentEl.style.fontWeight = "bold";
  pSalaryEl.style.fontWeight = "bold";
  div2El.appendChild(pNameEl);
  div2El.appendChild(pDepartmentEl);
  div2El.appendChild(pSalaryEl);
};
// to call the render prototype
for (let i = 0; i < allUser.length; i++) {
  allUser[i].render();
}
