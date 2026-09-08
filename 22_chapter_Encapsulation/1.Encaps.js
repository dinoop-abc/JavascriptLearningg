class Person {
    #child1;    //private variable
    #child2;
constructor(name, child1, child2) { //constructor
this.name = name;  //pulic variable
this.#child1 = child1; // Store values in private variables
        this.#child2 = child2;
    }
getChild1() {    // Getter method - to READ private child1
        return this.#child1;
    }
setChild1(newName) {   // Setter method - to CHANGE private child1
        this.#child1 = newName;
    }}
let p = new Person("Pramod", "Virad", "Jenny");// Create an object
// console.log(p.#child1); //Cannot access private variable directly
console.log(p.getChild1()); //Access private variable using getter
// Output: Virad
p.setChild1("VIRAD"); // Change private variable using setter
console.log(p.getChild1());// Read the changed value
// Output: VIRAD