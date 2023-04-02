$(document).ready(onReady);

function onReady() {

$('#submit-btn').on('click', submitInfo);  
$('#employee-Info').on('click','.delete-btn', deleteRow);

}

function submitInfo(event){
event.preventDefault();

let firstNameInput = $('#firstName-Input')
let lastNameInput = $('#lastName-Input')
let idInput = $('#id-Input')
let titleInput = $('#title-Input')
let annualSalaryInput = $('#annualSalary-Input')

let firstName = firstNameInput.val();
let lastName = lastNameInput.val();
let id = idInput.val();
let title =titleInput.val();
let annualSalary = annualSalaryInput.val();

firstNameInput.val('');
lastNameInput.val('');
idInput.val('');
titleInput.val('');
annualSalaryInput.val('');

$('#employee-Info').append(`
<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>$${annualSalary}</td>
    <td><button class="delete-btn">Delete</button></td>
</tr>
`);

let monthlyCost = Number($('#monthly-cost').text());
let monthlySalary = monthlyCost + annualSalary/12;
$('#monthly-cost').text(monthlySalary);


if(monthlySalary > 20000){
$('h4').css('background-color','red');
}
}


function deleteRow() {
$(this).parent().parent().remove()
}






