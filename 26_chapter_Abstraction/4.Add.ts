interface Calculator {
    num1: number;
    num2: number;
}
let numbers: Calculator = {
    num1: 10,
    num2: 20
};
let result = numbers.num1 + numbers.num2;
console.log("Sum:", result);