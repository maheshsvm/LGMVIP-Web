function enrollStudnet(event){

    event.preventDefault();
    //form values are --->
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let dob = document.getElementById('dob')
    let gender = document.querySelector('input[name = "gender"]:checked');
    let skills = [];
    let skillsCheckbox = document.getElementsByName('checkbox');
    for (let i = 0; i < skillsCheckbox.length; i++) {
        if (skillsCheckbox[i].checked) {
            skills.push(skillsCheckbox[i].value);
        }
    }

    let card = `<div class="card">
    <p>${name.value}</p>
    <p>${email.value}</p>
    <p>${dob.value}</p>
    <p>${gender.value}</p>
    <p>${skills}</p>
</div>`

    let right = document.getElementById('right');
    right.innerHTML += card;

    name.value = '';
    email.value = '';
    dob.value = null;
    gender.checked = false;
    for (let i = 0; i < skillsCheckbox.length; i++) {
        skillsCheckbox[i].checked = false;
    }
}

// adding event listener on submission of form
let form = document.getElementById('form')
form.addEventListener('submit' , enrollStudnet)

// making clear button
let clear = document.getElementById('clear');
clear.addEventListener('click' , ()=>{
    let right = document.getElementById('right')
    right.innerHTML = '<h2>Enrolled Students</h2>'
})