console.log("js");

$( document ).ready(onReady)

let employees = [];

function onReady() {
    console.log('JQ');
    $('#submit-button').on('click', submitForm);   
}

function updateMonthlyTotal() {
    let total = 0; // initialize counter variable
    
    for(let i of employees){ // loop over employees array
        total += i.monSalary; // add each employee monthly cost to counter
    }
    //update total monthly on DOM
    $('#mon-total').text(total);
}

function displayEmployee() {
    // empty table to avoid duplication
    $('#table-grossness').empty();
    // loop over employees array
    for( let i of employees){ 
        // append array data into
        $('#table-grossness').append(`<tr><td>${i.firstName}</td><td>${i.lastName}</td><td>${i.id}</td><td>${i.title}</td><td>${i.salary}</td></tr>`)    
    }
    $('#first-name-in').val(""); // empty input fields
    $('#last-name-in').val("");
    $('#id-num-in').val("");
    $('#title-in').val("");
    $('#ann-sal-in').val("");
}

function addEmployee(nameF, nameL, idNum, title, annSalary) {
        const employee = {
        firstName: nameF,
        lastName: nameL,
        id: idNum,
        title: title,
        salary: annSalary,
        monSalary: annSalary/12,
        }
        // adds object to employees array
        employees.push(employee);
}

function submitForm() {
    console.log('Hey it works huh cool');
   // create employee object
   let nameF = $('#first-name-in').val(); // initialize variables with input data
   let nameL = $('#last-name-in').val();
   let idNum = $('#id-num-in').val();
   let title = $('#title-in').val();
   let annSalary = $('#ann-sal-in').val();
   addEmployee(nameF, nameL, idNum, title, annSalary); // add employee to employees array
   console.log(employees); // testing
   // append the object info to the table
    displayEmployee();
   // update monthly budget
    updateMonthlyTotal();
}