// basics of click event

const button = document.getElementById("ClickBtn");
button.addEventListener("click", function(){
    console.log("Button is clicked");
}); 

button.addEventListener("dblclick", function(){
    console.log("Second Event listener: Button is clicked");
}); 