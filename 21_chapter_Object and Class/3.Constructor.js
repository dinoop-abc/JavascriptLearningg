class Student {
     constructor(name, age) {
        this.name = name;
        this.age = age;  }
display() {
        console.log(this.name); //stores those values inside the newly created object.
        console.log(this.age);
    }}
let s1 = new Student("Dinoop", 40); //JavaScript automatically calls,constructor(name, age)
s1.display();
 let s2 = new Student("Anu", 35);