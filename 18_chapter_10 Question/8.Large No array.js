let numbers = [10, 25, 15, 60, 30];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is: " + largest);