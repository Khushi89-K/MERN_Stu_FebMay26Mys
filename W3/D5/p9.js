// Limiting listener to once only for a event
const onceBtn = document.getElementById("onceBtn");
onceBtn.addEventListener("click", function(){
    console.log("This click listener works only once.");
},{once:true});

// Global keyboard shortcut creation
document.addEventListener("keydown", function(event){
    if(event.ctrlkey && event.key.toLowercase()==="s"){
        event.preventDefault();
        console.log("custom ctrl+s shortcut triggered");

    }
})