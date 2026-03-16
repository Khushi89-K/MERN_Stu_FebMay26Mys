const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addFaq");
const container = document.getElementById("faq-container");
const error = document.getElementById("error");
const emptyMessage = document.getElementById("empty-message");

addBtn.addEventListener("click", () => {

const question = questionInput.value.trim();
const answer = answerInput.value.trim();

error.textContent = "";


if(question.length < 5){
error.textContent = "Question must be at least 5 characters";
return;
}

if(answer.length < 15){
error.textContent = "Answer must be at least 15 characters";
return;
}
emptyMessage.style.display = "none";


const faq = document.createElement("div");
faq.className = "faq";

const heading = document.createElement("h3");
heading.textContent = question;

const para = document.createElement("p");
para.textContent = answer;

heading.insertAdjacentHTML(
"beforeend",
'<span class="badge">FAQ</span>'
);

const delBtn = document.createElement("button");
delBtn.textContent = "Delete";

delBtn.addEventListener("click", () => {

faq.remove();

if(container.Children.length === 0){
emptyMessage.style.display = "block";
}

});


faq.appendChild(heading);
faq.appendChild(para);
faq.appendChild(delBtn);

container.appendChild(faq);


questionInput.value = "";
answerInput.value = "";

});