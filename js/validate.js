//target the form an all the form elements
let submitForm = document.querySelector('#validateForm'),
    fullName = document.querySelector('#fullName'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phoneNumber'),
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
        required(phone, e);
        required(gender, e);
        required(password, e);
        emailValidation(e);
        passwordValidation(e);

        return true;
    }


    //email validation
    function emailValidation(event) {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.value.match(emailRegex)) {
            email.nextElementSibling.innerHTML = 'Please enter a valid email address';
            event.preventDefault();
            return false;
        } else {
            email.nextElementSibling.innerHTML = '';
            return true;
        }
    }

    //password validation
    function passwordValidation(event) {
        let pwdRegex = /^[a-z0-9]+$/i;
        if (!password.value.match(pwdRegex)) {
            password.nextElementSibling.innerHTML = 'Password must contain letters or numbers only';
            event.preventDefault();
            return false;
        } else if (!(password.value.length >= 8)) {
            password.nextElementSibling.innerHTML = 'Password length must be longer than 8';
            event.preventDefault();
            return false;
        } else {
            password.nextElementSibling.innerHTML  = '';
            return true;
        }
    }

    submitForm.addEventListener('submit', validateForm);