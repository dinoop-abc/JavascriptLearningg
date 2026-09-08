//Call by Value.
let a = 10; // Original variable
let b = a; // b gets a COPY of the value of a
b = 20;// Change b
console.log(a); // 10
console.log(b); // 20

//Call By reference

// Create an object
let person1 = {
    name: "Dinoop"
};
// person2 points to the same object
let person2 = person1;
// Change the object using person2
person2.name = "Ayush";
console.log(person1.name); // Ayush
console.log(person2.name); // Ayush

