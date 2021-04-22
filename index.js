let button = document.getElementById('go');
let dateInput = document.getElementById('dob');

function calculate_age() {
    var currentYear =  new Date().getFullYear();
    let date = dateInput.value;
    let age = currentYear - date.split('-')[0]

    document.querySelector('.container').innerHTML += age
   // console.log(age)
}

button.addEventListener("click", calculate_age);
