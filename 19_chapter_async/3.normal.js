//EG1
function add(a, b) {  //Normal Function
    return a + b;
}
let result = add(10, 20);
console.log(result);

//EG2
async function add(a, b) {  //async Function and no wait
    return a + b;
}
let result = add(10, 20);
console.log(result);

//EG3
async function add(a, b) {  //async with await
    return a + b;
}
async function test() {
let result = await add(10, 20); //Give me the value inside this Promise.
console.log(result);
}
test(); //when we call it enter test()

//EG4
function add(a, b) {  //say that I will give you the answer after 2 seconds."
return new Promise((resolve) => {
setTimeout(() => {
let sum = a + b;
resolve(sum);
}, 2000);
    });
}
async function test() {
console.log("Calculation started");
let result = await add(10, 20);
console.log("Result =", result);
console.log("Calculation completed");
}
test();