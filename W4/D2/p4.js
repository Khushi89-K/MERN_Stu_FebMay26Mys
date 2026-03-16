const StudentForm = document.getElementById("StudentForm");
const NameInput = document.getElementById("NameInput");
const EmailInput = document.getElementById("EmailInput");
const inspectBtn = document.getElementById("inspectBtn");
const terms = document.getElementById("terms");
const Country= document.getElementById("Country")

inspectBtn.addEventListener("click", function(){
    console.log("Form:", StudentForm);
    console.log("Name:", NameInput.value);
    console.log("Email:", EmailInput.value);

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    console.log("Gender: ",selectedGender?selectedGender.value:"not selected");
    console.log("accepted terms: ", terms.checked);
    console.log("Country:",Country.value);
});