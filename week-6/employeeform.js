let Employee = [];

function Employees(name, title, salary, status = "Full-Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}
Employees.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name);
    console.log("Job Title: " + this.title);
    console.log("Salary: " + this.salary);
    console.log("FT/PT: " + this.status);
    console.log("Is this a new Employee?: " + this.isNew);
    console.log("================================");
}

Employees.prototype.isNew = true;


var myEmployee = new Employees("Jeremiah", "Ops Associate", "$14/hr");
myEmployee.printEmployeeForm();

var myEmployee1 = new Employees("Michael", "Manager", "$19/hr");
myEmployee1.isNew = false
myEmployee1.printEmployeeForm();

var myEmployee2 = new Employees("Vanessa", "Admin Asst.", "$17/hr", "Part-Time");
myEmployee2.printEmployeeForm();