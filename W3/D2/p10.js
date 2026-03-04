// callback function
// Is a function which is passed as arguments to another function

function greetUser(name, callback) {
    console.log("Hello, ", name);
    callback();
}
greetUser("khushi", function() {
    console.log("Callback function executed");
});