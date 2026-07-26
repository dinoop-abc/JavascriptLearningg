const readlineSync = require("readline-sync");

let name = readlineSync.question("Enter your name: ");

console.log("Hello", name);

/*console.log("Enter the number!");
const data = require('fs').readFileSync(0, 'utf8');
console.log("Hi", data);*/