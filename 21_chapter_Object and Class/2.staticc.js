class Student {
display() {    //Normal method
        console.log("Hello");
    }
static college() {  //static method
        console.log("St. Joseph's College");
    }
}
let s1 = new Student();  //create oject
s1.display(); //A normal method is called using the object:
Student.college(); //But a static method is called using the class: