//target the form an all the form elements
let submitForm = document.querySelector('#validateForm'),
    fullName = document.querySelector('#fullName'),
    email = document.querySelector('#email'),
    phoneNumber = document.querySelector('#phoneNumber'),
    gender = document.querySelector('#gender'),
    password = document.querySelector('#password');


    //this function makes sure all required fields are filled
    function required(field, event) {
        if (field.value == '') {
            field.nextElementSibling.innerHTML = 'This is a required field!';
            event.preventDefault();
            return false;
        } else {
            field.nextElementSibling.innerHTML = '';
            return true;
        }
    }

    // add eventlistener
    function validateForm(e) {
        required(fullName, e);
        required(email, e);
        required(phoneNumber, e);
        required(gender, e);
        required(password, e);

        return true;
    }


    //email validation
    function emailValidation(event) {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }

    submitForm.addEventListener('submit', validateForm);