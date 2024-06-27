function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.walk = function () {
  console.log("walk");
};

Person.prototype.getName = function () {
  console.log(this.name);
};

let newPers = new Person("Dima", 21);
console.log(newPers.age); // 21
newPers.getName(); // Dima
newPers.walk(); // walk
