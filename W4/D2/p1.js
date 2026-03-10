// innerText & textContent
// innerText: visible rendered text only
// textContent: all the text modes regardless of CSS
// innerHTML: allows reading or writing HTML markup inside an element

const message = document.getElementById("message");
const Textdocument = document.getElementById("TextContentBtn");
const res = document.getElementById("reset");

document.getElementById("innerTxtBtn").addEventListener("click", function(){
    message.innerText = "updated using innerText";
});
TextContentBtn.addEventListener("click", function(){
    message.innerText = "updated using TextContentBtn";
});
reset.addEventListener("click", function(){
    message.innerText = "original message";

});
const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click", function(){
    box.innerHTML = "<strong>Original</strong> Content";
});