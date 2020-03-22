const employees = [];

function Employee(name, jobTitle, salary, status = 'Full Time'){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log(`Name: ${name}, Job Title: ${jobTitle}, Salary: ${salary}, Status: ${status}`);
    }
};
let firstEmployee = new Employee('Kipp Benjamin Jr.', 'Software Engineer', 150000, 'Contract');
let secondEmployee = new Employee('Mauriah Benjamin.', 'Medical Billing Specialist', 60000, 'Contract');
let thirdEmployee = new Employee('John Doe.', 'Data Analyst', 65000, 'Part-Time');

employees.push(firstEmployee);
employees.push(secondEmployee);
employees.push(thirdEmployee);
console.log(employees);