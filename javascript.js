$(document).ready(onReady);

function onReady() {

$('#submit-btn').on('click', submitInfo);  
$('#employee-Info').on('click','.delete-btn', deleteRow);
}

function submitInfo(event){
event.preventDefault();

let firstNameInput = $('#firstName-Input').val();
let lastNameInput = $('#lastName-Input').val();
let idInput = $('#id-Input').val();
let titleInput = $('#title-Input').val();
let annualSalaryInput = $('#annualSalary-Input').val();
$('#employee-Info').append(`
<tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${annualSalaryInput}</td>
    <td><button class="delete-btn">Delete</button></td>
</tr>
`);

let monthlyCost = Number($('#monthly-cost').text());
let monthlySalary = monthlyCost + annualSalaryInput/12;

$('#monthly-cost').text(monthlySalary);

}

function deleteRow() {
$(this).parent().parent().remove()
}