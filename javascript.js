$(document).ready(onReady);

function onReady() {

$('#submit-btn').on('click', submitInfo);  
$('#employee-Info').on('click','.delete-btn', deleteRow)
}

function submitInfo(event){
event.preventDefault();

let firstNameInput = $('#firstName-Input')
let lastNameInput = $('#lastName-Input')
let idInput = $('#id-Input')
let titleInput = $('#title-Input')
let annualSalaryInput = $('#annualSalary-Input')

firstNameInput.val('')
lastNameInput.val('')
idInput.val('')
titleInput.val('')
annualSalaryInput.val('')

let firstName = firstNameInput.val()
let lastName = lastNameInput.val()
let id = idInput.val()
let title = titleInput.val()
let annualSalary = annualSalaryInput.val()



$('#employee-Info').append(`
<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button class="delete-btn">❌</button></td>
</tr>
`)
}

function deleteRow(event) {
$(event.target).parent().parent().remove()
}