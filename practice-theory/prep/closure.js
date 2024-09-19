// Task: Write a function createCounter that returns a function that increments and logs an internal counter each time it’s called.
// Objective: Understand how a function can access and update a variable outside its scope.
function createCounter() {
  let count = 0;
  return function innerCount() {
    count++;
    console.log(count);
  };
}
let counter = createCounter();
counter();
counter();
counter();
counter();

// Task: Create a function adder that takes an initial number as an argument and
// returns a new function that takes another number, adds them together, and returns the result.
// Objective: Understand how closures retain access to function arguments.
function adder(num) {
  return function addInside(numIns) {
    console.log(num + numIns);
  };
}
let add = adder(2);
add(5);

// Task: Create a function BankAccount that simulates a simple bank account with deposit, withdraw, and checkBalance
//  methods. Keep the balance private using closures.
// Objective: Learn how closures can be used to simulate private variables.
function BankAccount(initBalance) {
  let balance = initBalance;
  function checkBalance() {
    console.log(balance);
  }
  function deposit(money) {
    balance += money;
    console.log(money + " have been added");
  }
  function withdraw(money) {
    balance -= money;
    console.log(money + " have been withdrawed");
  }
  return { deposit, withdraw, checkBalance };
}
let bank = BankAccount(1000);
bank.deposit(2555);
bank.checkBalance();

// Task: Create a Person function that returns an object with setName, getName, and getAge methods,
//  keeping name and age private using closures.
// Objective: Learn how closures can provide controlled access to data.
function Person(name, age) {
  let personName = name;
  let personAge = age;

  function getName() {
    console.log(personName);
  }

  function getAge() {
    console.log(personAge);
  }

  function setName(newName) {
    personName = newName;
    console.log(personName);
  }

  return { getName, getAge, setName };
}

let pers = Person("Dima", 21);
pers.getName();
pers.setName("Dmytro");
pers.getName();
