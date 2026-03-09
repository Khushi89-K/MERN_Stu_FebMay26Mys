// // // throw custom errors
// function divide(){
//     if(b===0) {
//         throw new Error("cannot divide by Zero");
//     }
//     return a/b;
// }
// try{
//     // console.log(divide(10,2));
//     console.log(divide(10,0));
// }
// catch(err){
//     console.log("Caught: ", err.message);
// }

// function checkAge(age){
//     if(age<18) {
//         throw new Error("age must be 18 and above");
//     }
//     console.log("You can vote");
//     return age;
// }
// try{
//     console.log(checkAge(30));
//     // console.log(checkAge(10));
// }
// catch(err){
//     console.log("Caught: ", err.message);
// }

// create custom error class to handle error
class validationError extends Error{
    constructor(message){
        super(message);
        this.name = "validationError";
    }

} 
function createUser(name){
    if(!name){
        throw new validationError("Name is required");
    }
    console.log("hi "+name+ " welcome")
    return {name};
}
try{
    createUser("khushi");
    //   console.log(createUser(""));
}
catch(err){
      console.log("err.name: ", err.message);
}