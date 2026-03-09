// logging

console.log("console logging");

console.warn("warning message");

console.error("error message");

let users = [
    {id:1,name:"amit"},
    {id:2,name:"santhosh"},
];
console.log(users);
console.table(users);

// group related logs
console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd()

// measure execution time
console.time("LoopTimer");
for(let i=0; i<1000; i++){

}
console.timeEnd("LoopTimer");
