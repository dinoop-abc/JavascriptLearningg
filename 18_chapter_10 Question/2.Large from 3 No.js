let no1 = 10;
let no2 = 25;
let no3 = 15;

if (no1 >= no2 && no1 >= no3) {
    console.log("Largest number is: " + no1);
} else if (no2 >= no1 && no2 >= no3) {
    console.log("Largest number is: " + no2);
} else {
    console.log("Largest number is: " + no3);
}

//OR
function largestOf3Numbers(a, b, c) {
    if (a >= b && a >= c) {
        console.log("Largest Number is: " + a);
    } else if (b >= a && b >= c) {
        console.log("Largest Number is: " + b);
    } else {
        console.log("Largest Number is: " + c);
    }
}
largestOf3Numbers(30, 40, 35);