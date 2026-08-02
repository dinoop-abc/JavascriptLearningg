// ============================
// 1. Identifier (Variables)
// ============================
// Identifier = name given to a variable/function.
// Rules: can start with letter, _ or $, NOT a number.
let name = "Dinoop";      // valid identifier
let _age = 40;            // valid (starts with _)
let $salary = 50000;      // valid (starts with $)
// let 123abc = 10;       // INVALID - cannot start with number
console.log("1. Identifier:", name, _age, $salary);

// ============================
// 2. Operators
// ============================
let a = 10;
let b = 5;

// Arithmetic operators
console.log("2. Arithmetic:");
console.log("Addition:", a + b);        // 15
console.log("Subtraction:", a - b);     // 5
console.log("Multiplication:", a * b);  // 50
console.log("Division:", a / b);        // 2
console.log("Modulus:", a % b);         // 0 (remainder)

// Comparison operators
console.log("Comparison:");
console.log("a == b:", a == b);         // false
console.log("a > b:", a > b);           // true
console.log("a === 10:", a === 10);     // true (strict equal)

// Logical operators
console.log("Logical:");
console.log("true && false:", true && false);   // false
console.log("true || false:", true || false);   // true
console.log("!true:", !true);                   // false

// ============================
// 3. if / else if / else
// ============================
let marks = 75;
if (marks >= 90) {
    console.log("3. Grade A");
} else if (marks >= 75) {
    console.log("3. Grade B");
} else if (marks >= 50) {
    console.log("3. Grade C");
} else {
    console.log("3. Fail");
}

// ============================
// 4. switch
// ============================
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("4. Start of week");
        break;
    case "Friday":
        console.log("4. Weekend coming");
        break;
    default:
        console.log("4. Other day");
}

// ============================
// 5. for loop
// ============================
console.log("5. For loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// ============================
// 6. Array
// ============================
let fruits = ["Apple", "Orange", "Mango"];
console.log("6. Array:");
console.log("First fruit:", fruits[0]);       // Apple
console.log("Array length:", fruits.length);  // 3
fruits.push("Grapes");                        // add at end
console.log("After push:", fruits);

// Loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

// ============================
// 7. Function
// ============================
// Function without arguments and no return
function greet() {
    console.log("7. Hello Dinoop");
}
greet();

// Function with arguments
function add(x, y) {
    return x + y; // return the result
}
let sum = add(10, 20); // store returned value
console.log("Sum of 10 and 20:", sum);
