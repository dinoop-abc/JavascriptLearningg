let no = 7;
let isPrime = true;

if (no < 2) {
    isPrime = false;
}

for (let i = 2; i < no; i++) {
    if (no % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}