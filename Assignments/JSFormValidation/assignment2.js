const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const feedbackInput = document.getElementById("feedback");

const submitBtn = document.getElementById("submitBtn");
const container = document.getElementById("feedback-container");

const error = document.getElementById("error");
const count = document.getElementById("count");

let feedbackTotal = 0;

submitBtn.addEventListener("click", () => {

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const type = typeInput.value;
const feedback = feedbackInput.value.trim();

error.textContent = "";


if(!name || !email || !type || !feedback){
error.textContent = "All fields are required";
return;
}

const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
error.textContent = "Enter valid email";
return;
}

if(feedback.length < 20){
error.textContent = "Feedback must be at least 20 characters";
return;
}


let labelText = "";
let labelClass = "";

if(type === "Bug"){
labelText = "[Needs Review]";
labelClass = "bug";
}

if(type === "Suggestion"){
labelText = "[Idea]";
labelClass = "suggestion";
}

if(type === "Appreciation"){
labelText = "[Positive]";
labelClass = "appreciation";
}


const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h3 class="username"></h3>
<p class="email"></p>
<p class="type"></p>
<p class="feedback"></p>
<button class="delete-btn">Delete</button>
`;


card.querySelector(".username").textContent = name;
card.querySelector(".email").textContent = email;

const typeElement = card.querySelector(".type");
typeElement.textContent = type + " ";

typeElement.insertAdjacentHTML(
"beforeend",
`<span class="label ${labelClass}">${labelText}</span>`
);

card.querySelector(".feedback").textContent = feedback;


card.querySelector(".delete-btn").addEventListener("click", () => {

card.remove();

feedbackTotal--;
count.textContent = feedbackTotal;

});

container.appendChild(card);


feedbackTotal++;
count.textContent = feedbackTotal;


nameInput.value = "";
emailInput.value = "";
typeInput.value = "";
feedbackInput.value = "";

});