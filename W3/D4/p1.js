//  array basics
console.log("Arrays basics");
// creating array
let emptyArray = [];
let numArray= [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name: "Gola"},[5,6]];
console.log( emptyArray);
console.log( numArray);
console.log( mixedArray);

// using constructor
let fruits = new Array("apple","grapes");
// console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

// Push: add
fruits.push("cherry");
console.log(fruits);
//pop : remove
fruits.pop();

// unshift: adds elements to the begining
fruits.unshift("orange");
console.log(fruits);

//shift : remove from begining

fruits.shift();
console.log(fruits);