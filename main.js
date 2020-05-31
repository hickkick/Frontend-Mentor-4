const form = document.querySelector('.form');
const name = form.querySelector('.form__input--name');
const lastName = form.querySelector('.form__input--last-name');
const email = form.querySelector('.form__input--email');
const password = form.querySelector('.form__input--password');
const fields = form.querySelectorAll('.form__input');



//listener
form.addEventListener('submit', function (event) {
    event.preventDefault();

    removeValidation();

    removeBorder();

    checkFieldsPresence();

    sendForm();
    // form.submit();
    // if(fields.validity.valid.value == true) {
    //     alert('form was send');
    // }
    
});


// function
let generateError = function (text) {
    let wrap = document.createElement('div');
    wrap.classList.add('input-wrapper');
    wrap.innerHTML = text;
    return wrap;
}

let removeValidation = function () {
    let errors = document.querySelectorAll('.input-wrapper');

    for (let i = 0; i < errors.length; i++) {
        
        errors[i].remove();
    }
}

let removeBorder = function () {
    for(let i = 0; i < fields.length; i++ ) {
        if (!fields[i].value) {
                
        } else {
            fields[i].style.borderColor = "var(--Grayish-Blue)";
            fields[i].style.marginBottom = "15px";
            if (email.value == email.value.trim()) {
                email.style.borderColor = "var(--Red)";
            }
            
        }
    }
   
}

let checkFieldsPresence = function () {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {

            //some styly for inputs
            fields[i].style.borderColor = "var(--Red)";
            fields[i].style.marginBottom = "0px";

            //create input wrapper div message
            let wrap = generateError(`${fields[i].placeholder} cannot be empty`);
            form[i].parentElement.insertBefore(wrap, fields[i].nextSibling);
            
        } 
    }

    //email
    checkEmail();

}

let checkEmail = function () {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //vallidate email
    if (reg.test(email.value) == false) {
        //if empty input, exit and dont change massege
       if (reg.test(email.value) == email.value.trim()) {
           return
       }
       //for massege 
        let wrap = generateError('Looks like this is not an email');
        email.style.color = "var(--Red)";
        email.style.marginBottom = "0px";
        return email.parentElement.insertBefore(wrap, email.nextSibling);
    } else {
        //if all sucsses
      return  email.style ="borderColor:var(--Grayish-Blue); color : var(--Dark-Blue)";
    }
}

let sendForm = function () {
    let bool = 0;
    for (let i = 0; i < fields.length; i++) {
        
        if (fields[i].validity.valid == true) {
            bool += 1;
        }
    }

    if (bool == 4) {
       return form.submit();
    } else {
        return
    }
}

