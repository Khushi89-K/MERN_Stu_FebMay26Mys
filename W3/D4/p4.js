// // Filter method

// let marks = [75,78,80,90,67,51];
// let passed = marks.filter(mark => mark >=70);
// console.log(marks);
// console.log(passed);

let students = [
    {name:"arjun", score: 72},
    {name:"krishna", score: 90},
    {name:"beema", score: 60},
    {name:"khushi", score: 76},
    {name:"rev", score: 80},
    {name:"jeevu", score:50}

    
];
let passed = students.filter(student => student.score >=70).map(student => student.name);

console.log(passed);