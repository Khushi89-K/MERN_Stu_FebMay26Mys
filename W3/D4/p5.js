// reduce method

let nums = [5,10,15];
let total= nums.reduce((intermediateSum,current) => (intermediateSum + current), 0);
let avg = total/nums.length;
console.log(avg);

// reduce to object count by category
let items = ["pen", "pencil","pen", "eraser"]
let count = items.reduce((a,b)=> {
    a[b] = (a[b] || 0) + 1;
    return a;
},{});
console.log("Item count:", count);