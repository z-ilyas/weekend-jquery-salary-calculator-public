$(document).ready(onReady);

function onReady() {

$('#submit-btn').on('click', submitInfo);  
$('#employee-Info').on('click','.delete-btn', deleteRow);

}

function submitInfo(event){
event.preventDefault();

let inputs = {
    firstNameInput: $('#firstName-Input').val(),
    lastNameInput: $('#lastName-Input').val(),
    idInput: $('#id-Input').val(),
    titleInput: $('#title-Input').val(),
    annualSalaryInput: $('#annualSalary-Input').val()
};

$('#firstName-Input').val('');
$('#lastName-Input').val('');
$('#id-Input').val('');
$('#title-Input').val('');
$('#annualSalary-Input').val('');

let renderDom = renderDom(inputs);
let getMonthlySalarty = getMonthlySalarty();
let overBudget = overBudget();
}

function renderDom(inputs) {
return $('#employee-Info').append(`
<tr>
    <td>${inputs.firstNameInput}</td>
    <td>${inputs.lastNameInput}</td>
    <td>${inputs.idInput}</td>
    <td>${inputs.titleInput}</td>
    <td align="right">$ ${inputs.annualSalaryInput}</td>
    <td align="center"><button class="delete-btn">Delete</button></td>
</tr>
`);
}
function getMonthlySalarty() {
    let monthlyCost = Number($('#monthly-cost').text());
    let monthlySalary = monthlyCost + annualSalary/12;
    return $('#monthly-cost').text(monthlySalary);
}
function overBudget() {
    if(monthlySalary > 20000){
    $('h4').css('background-color','red');
}
}
function deleteRow() {
$(this).parent().parent().remove()
}






