const themeInput=document.getElementById("themeInput");
const ouput=document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    sessionStorage.setItem("theme",themeInput.value);
    sessionStorage.
    console.log("Saved theme:",themeInput.value);
    output.textcontent="saved stored to sessionstorage";
    output.style.color="green";
})
document.getElementById("readBtn").addEventListener("click",function(){
    const theme=sessionStorageStorage.getItem("theme");
    console.log("Saved theme:",themeInput.value);
    output.textcontent="theme is :"+theme;
    output.style.color="green";
});
document.getElementById("removeBtn").addEventListener("click",function(){
      sessionStorage.removeItem("loggedIn");
    output.textcontent="Removed'loggedIn' ";
    output.style.color="green";
});
document.getElementById("clearBtn").addEventListener("click", function() {
    sessionStorageStorage.removeItem("loggedIn");
    output.textContent = "delete local storage'";
    output.style.color = "green";
});