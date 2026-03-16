function tagPasswords(passwords) {
    if (typeof passwords !== "string") {
        return "INVALID";
    }
    const len = passwords.length;
    if (len < 8) {
        return "WEAK";
    }

    let hasLetter = false;
    let hasNumber = false;

    
    for (let i = 0; i < len; i++) {
        const char = passwords[i];

    }

    
    if (len >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    }

    
    if (len >= 8 && hasLetter && hasNumber) {
        return "MEDIUM";
    }

    else{
    return "WEAK";}
}


console.log(tagPasswords("abc12345"));    
console.log(tagPasswords("longPass12345")); 
console.log(tagPasswords("short1"));      
console.log(tagPasswords(12345678));