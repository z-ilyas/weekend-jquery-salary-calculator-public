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

renderDom(inputs);
let monthlyCost = Number($('#monthly-cost').text());
let monthlysalary = monthlyCost + inputs.annualSalaryInput/12;
calculate(monthlysalary);
turnRed(monthlysalary);

}

function renderDom(object) {
return $('#employee-Info').append(`
<tr>
    <td>${object.firstNameInput}</td>
    <td>${object.lastNameInput}</td>
    <td>${object.idInput}</td>
    <td>${object.titleInput}</td>
    <td align="right">$ ${object.annualSalaryInput}</td>
    <td align="center"><button class="delete-btn">Delete</button></td>
</tr>
`);
}
function calculate(budget) {
    if(budget > 20000){
    $('h4').css('background-color','red');
    }
    return $('#monthly-cost').text(budget);
}
function overBudget(budget) {
    if(budget > 20000){
    return $('h4').css('background-color','red');
    }
}
function deleteRow() {
$(this).parent().parent().remove()
}






