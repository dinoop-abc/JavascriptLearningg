function add() {
    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log("Sum =", sum);
}
add();

// With Return Type, No Arguments
function add() {
let a = 10;
let b = 20;
let sum = a + b;
    return sum; //Retrun result
}
let result = add();// Store returned value
console.log(result); // Print result

// With Arguments, No Return Type
function add(a, b) {
let sum = a + b;
console.log("Sum =", sum);
}
add(10, 20);// Pass values while calling

// With Arguments and With Return Type
function add(a, b) {
let sum = a + b;
return sum;
}
let result = add(10, 20); // Store returned value
console.log(result);