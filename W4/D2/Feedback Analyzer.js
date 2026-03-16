const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const feedbackInput = document.getElementById("feedback");

const submitBtn = document.getElementById("submitBtn");
const errorMsg = document.getElementById("error");

const container = document.getElementById("feedbackContainer");
const countDisplay = document.getElementById("count");

let feedbackCount = 0;

submitBtn.addEventListener("click", function(){

let name = nameInput.value.trim();
let email = emailInput.value.trim();
let type = typeInput.value;
let feedback = feedbackInput.value.trim();

errorMsg.textContent = "";

if(!name || !email || !type || !feedback){
errorMsg.textContent = "All fields are required.";
return;
}



let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
errorMsg.textContent = "Enter a valid email.";
return;
}

if(feedback.length < 20){
errorMsg.textContent = "Feedback must be at least 20 characters.";
return;
}



let label = "";

if(type === "Bug"){
label = "Needs Review";
}
else if(type === "Suggestion"){
label = "Idea";
}
else if(type === "Appreciation"){
label = "Positive";
}

let card = document.createElement("div");

card.innerHTML = `
<h4></h4>
<p class="email"></p>
<p class="type"></p>
<p class="label"></p>
<p class="text"></p>
<button class="deleteBtn">Delete</button>
<hr>
`;


card.querySelector("h4").textContent = name;
card.querySelector(".email").textContent = "Email: " + email;
card.querySelector(".type").textContent = "Type: " + type;
card.querySelector(".label").textContent = "Label: " + label;
card.querySelector(".text").textContent = feedback;


card.querySelector(".deleteBtn").addEventListener("click", function(){
card.remove();
feedbackCount--;
countDisplay.textContent = feedbackCount;
});


container.appendChild(card);



feedbackCount++;
countDisplay.textContent = feedbackCount;


nameInput.value = "";
emailInput.value = "";
typeInput.value = "";
feedbackInput.value = "";

});