/**
 * Create a Class
V Create a Person class with properties name and age.
V Add a method greet that logs a greeting message including the name.

Inheritance
V Create a Student class that extends the Person class.
V Add a property grade to the Student class.
V Add a method study that logs a message indicating the student is studying.

Encapsulation
V Modify the Person class to have private properties for name and age.
V Provide getter and setter methods for accessing and modifying these properties.

Polymorphism
V Create a Teacher class that extends the Person class.
V Override the greet method to include the subject the teacher teaches.
V Create instances of Person, Student, and Teacher and call the greet method on each.

Static Methods and Properties
V Add a static method compareAge to the Person class that takes two Person instances and returns the older person.
V Add a static property species with the value Homo sapiens.
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static species = "Homo sapiens";
  static compareAge(age1, age2) {
    console.log(age1, age2);
  }

  greet() {
    console.log("hello its me: " + this.name);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  get studName() {
    return this.name;
  }

  set studName(name) {
    this.name = name;
  }

  get studAge() {
    return this.age;
  }

  set studAge(age) {
    this.age = age;
  }

  study() {
    console.log("studying hard");
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  greet() {
    console.log("Hello im teacher and i study " + this.subject);
  }
}

const pe = new Person("sam", 33);
const st = new Student("DD", 22, 5);
const te = new Teacher("DDaa", 22, "Law");

st.studName = "dima";
st.greet();
console.log(st.studName);

console.log(st);

pe.greet();
st.greet();
te.greet();

Person.compareAge(pe.age, pe.age);
