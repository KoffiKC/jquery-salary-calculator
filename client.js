console.log("js");

$( document ).ready(onReady)

let employeeSalaries = [];

function onReady() {
    console.log('JQ');
    $('#submit-button').on('click', submitForm);   
}

function removeEmployee() {
    // target child containing salary data
    let salary = $(this).parent().parent().children('#salary').text()
    let idNum = $(this).parent().parent().children('#id-num').text()
    
    for (let i in employeeSalaries) {
        if (salary == employeeSalaries[i].sal && idNum == employeeSalaries[i].id) {
            employeeSalaries[i].sal = 0;
            console.log(employeeSalaries);
        }
        
    }
    // remove
    $(this).parent().parent().remove();

    updateMonthlyTotal();
}

function updateMonthlyTotal() {
    let total = 0; // initialize counter variable
    
    for(let salary of employeeSalaries){ // loop over employee salary array
        total += Math.round(salary.sal/12); // add each employee monthly cost to counter
    }
    //update total monthly on DOM
    $('#mon-total').text(total);

    // update monthly total element when exceeding amount
    if (total > 20000){
        $('p').addClass("red")
    } else if (total < 20000) {
        $('p').removeClass("red")
    }
}

function displayEmployee(nameF, nameL, idNum, title, annSalary) {
    // append array data into
    $('#table-grossness').append(`<tr><td>${nameF}</td><td>${nameL}</td><td id="id-num">${idNum}</td><td>${title}</td><td id="salary" >${annSalary}</td><td><button id="delete-button">Delete</button></td></tr>`)    

    // empty input fields
    $('#first-name-in').val(""); 
    $('#last-name-in').val("");
    $('#id-num-in').val("");
    $('#title-in').val("");
    $('#ann-sal-in').val("");
}

function addEmployeeInfo(idNum, annSalary) {
        const employee = {
        id: idNum,
        sal: annSalary,
        }
        // adds object to employees array
        employeeSalaries.push(employee);
}

function submitForm() {
    console.log('Hey it works huh cool');
    // create employee object
    let nameF = $('#first-name-in').val(); // initialize variables with input data
    let nameL = $('#last-name-in').val();
    let idNum = $('#id-num-in').val();
    let title = $('#title-in').val();
    let annSalary = $('#ann-sal-in').val();

    // add salary to array for later manipulaton
    addEmployeeInfo(idNum, annSalary);
    // addEmployee(nameF, nameL, idNum, title, annSalary); // add employee to employees array
    // console.log(employees); // testing
    // append input values onto the DOM
    displayEmployee(nameF, nameL, idNum, title, annSalary);
    // update monthly budget
    updateMonthlyTotal();
    // delete button shenanigans
    $('#table-grossness').on('click', '#delete-button', removeEmployee);
}