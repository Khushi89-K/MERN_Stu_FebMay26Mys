function tagPassword(password) {
    if (typeof password !== "string") {
        return "INVALID";
    }

    if (password.length < 8) {
        return "WEAK";
    }
    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
            hasLetter = true;
        }

        if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }

    if (password.length >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    }

    if (password.length >= 8 && hasLetter && hasNumber) {
        return "MEDIUM";
    }

}
console.log(tagPassword("khushi8445667"));        
