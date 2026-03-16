console.log("node JS architecture demo");
console.log("1. script started ");

// setTimeOut 

setTimeout(() => {
    console.log("3. Timer callback finished after waiting");
},1000);

console.log("2. script continued without waiting for timer callback");