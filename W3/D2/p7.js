//arrow function
(args) => {
    // body of the function
}
// add two numbers
 const sum = (a,b) => {
    return a+b;

}
// console.log("3+5=", sum(3,5));
let result = sum(4,5);

//single line return / implicit return
const square = x =>x*x;
console.log("Square of 44:", square(44));

const sayHello = () => console.log("Hello from arrow func");
sayHello();
