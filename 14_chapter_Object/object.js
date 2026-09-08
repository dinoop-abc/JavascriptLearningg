let person = {
    name: "Dinoop",
    age: 40,
    city: "Calicut"
};
console.log(person.name); // Dinoop
console.log(person.age);  // 40
console.log(person.city); // Calicut

//Object have function
let person = {
    name: "Dinoop",
    age: 40,
    greet() {
        console.log("Hello");
    }
};
person.greet();