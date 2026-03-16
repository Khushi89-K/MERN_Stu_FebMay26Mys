const password= document.getElementById("LivePassword");
const message = document.getElementById("message");

password.addEventListener("input", function(){
        const password = LivePassword.value;
    if(!password){
         message.textContent = "password is required";
        message.style.color = "red";
        LivePassword.focus();
        return;

    }
    // check length of the password
    if(!password.length <0){
         message.textContent = "Password must be atleast 8 characters long";
        message.style.color = "red";
        LivePassword.focus();
        return;
    }
    // password has UPPERCASE characters
    if(!/[A-Z]/.test(password)){

        message.textContent = "Password must have atleast one uppercase  characters";
        message.style.color = "red";
        LivePassword.focus();
        return;
    }

     if(!/[A-Z]/.test(password)){

        message.textContent = "Password must have atleast one uppercase  characters";
        message.style.color = "red";
        LivePassword.focus();
        return;
    }
    // check number
    if(!/\d/.test(password)){
    
        message.textContent = "Password must have atleast one digit in it";
        message.style.color = "red";
        LivePassword.focus();
        return;
    }
    // serach special character
    if(!/[@#$%^&*!]/.test(password)){
            
        message.textContent = "Password must have atleast one special character @#$%^&*!";
        message.style.color = "red";
        LivePassword.focus();
        return;
    }

    message.textContent = "valid email and password entered";
    message.style.color="green";
    console.log("Success!",{email,password});

});