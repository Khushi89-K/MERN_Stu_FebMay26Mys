// Immediately Invoked Function expression(IIFE)
(function() {
    console.log("Basic IIFE executed Immediately");
})();


//  with parameters
(function(appname,version){
    console.log("App",appname,"Version:", version)
})("Node.js", "v22.22.0");


// with return value
const result = (function() {
    const a = 10, b= 20;
    return a+b;
})();
console.log("Sum is:", result);