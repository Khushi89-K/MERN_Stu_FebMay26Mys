// Introduction to node.js

const runtimeName = "node.js";
console.log("Introduction to node.js");
console.log(`${runtimeName} runs javascript outside the browser`);

const commonUses = [
    "used for server-side app",
    "automation scripts can be created"
];
// console.log(commonUses[0]);
// console.log(commonUses[1]);
commonUses.forEach((commonUse,index) => {
    console.log(`${index+1}.${commonUse}`);
});
