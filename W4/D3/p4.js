const jsonOutput = document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click", function () {

    const user = {
        id: 101,
        name: "Anjali",
        role: "accountant",
        skills: ["HTML", "CSS", "JS"]
    };

    localStorage.setItem("userProfile", JSON.stringify(user));

    jsonOutput.textContent = "User object saved as string to localStorage";
    jsonOutput.style.color = "green";  

});

document.getElementById("saveBtn").addEventListener("click",
     function () {
        const up = localStorage.getItem("userProfile");
        console.log(JSON.parse(up));
        console.log(up); 
        jsonOutput.textContent = "usertProfile" + up;
     }
    );