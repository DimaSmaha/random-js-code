// Helper class for delegation
class FlyBehavior {
  fly() {
    console.log("Flying!");
  }
}

class SwimBehavior {
  swim() {
    console.log("Swimming!");
  }
}

// Composed class with delegation
class Duck {
  constructor(name) {
    this.name = name;
    this.flyBehavior = new FlyBehavior();
    this.swimBehavior = new SwimBehavior();
  }

  fly() {
    this.flyBehavior.fly();
  }

  swim() {
    this.swimBehavior.swim();
  }

  quack() {
    console.log("Quack!");
  }
}

// Usage
const daffy = new Duck("Daffy");
daffy.fly(); // Flying!
daffy.swim(); // Swimming!
daffy.quack(); // Quack!
