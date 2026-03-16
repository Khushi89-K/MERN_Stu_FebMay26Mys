const signupForm = document.getElementById("signupForm");
const signuppassword = document.getElementById("password1");
const signupConfirmpassword = document.getElementById("password2");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    const password = password1.value;
    const confirmpass = password2.value;

    //password validation
    if(!password){
        message.textContent = "password is required.";
        message.style.color = "red";
        password1.focus();
        return;
    }
    //check length of the password
    if(password.length < 8){
        message.textContent = "password must be at least 8 characters long.";
        message.style.color = "red";
        password1.focus();
        return;
    }
    //check password has UppERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "password must contain at least 1 uppercase letter.";
        message.style.color = "red";
        password1.focus();
        return;
    }

    //check password has LOWERCASE characters
    if(!/[a-z]/.test(password)){
        message.textContent = "password must contain at least 1 lowercase letter.";
        message.style.color = "red";
        password1.focus();
        return;
    }

    //check number 
    if(!/\d/.test(password)){
        message.textContent = "password must contain at least 1 digit.";
        message.style.color = "red";
        password1.focus();
        return;
    }
    //check special characters
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "password must contain at least 1 special character.";
        message.style.color = "red";
        password1.focus();
        return;
    }
    if(password !== confirmpass){
        message.textContent = "passwords do not match.";
        message.style.color = "red";
        password2.focus();
        return;
    }
    message.textContent = "password matched .";
    message.style.color = "green";
    console.log("Success!", { password: "***Hidden***" });

});
signuppassword.addEventListener("input", () => message.textContent = "");
signupConfirmpassword.addEventListener("input", () => message.textContent = "");