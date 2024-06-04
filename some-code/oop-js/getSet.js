//using getters and setters
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  get userName() {
    return this.name;
  }
  set userName(newName) {
    this.name = newName;
  }

  get userAge() {
    return this.age;
  }
  set userAge(age) {
    this.age = age;
  }

  study() {
    console.log("studying hard");
  }
}

const st = new Student("dd", 5, 22);

st.userName = "dima";
st.study();
console.log(st.userName);
console.log(st.userAge);

console.log(st);
