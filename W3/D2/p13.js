// Function scope
function scope(){
    var insideVar = 10;
    let insideLet = 20;
    const insideconst = 30;
//     console.log(insideVar);
//     console.log(insideLet);
//     console.log(insideconst);
 }
scope();

function varFunctionScoped()  {
    if (true) {
        var x= 10
        let y=20
    }
    console.log("x:", x);
    console.log("y:", y);
}
varFunctionScoped();