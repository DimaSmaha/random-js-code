let actions = {
  sleeper: (state) => ({
    sleep() {
      console.log(`${state.name} sleeps`);
    },
  }),
  player: (state) => ({
    play() {
      console.log(`${state.name} plays`);
    },
  }),
  eater: (state) => ({
    eat(food) {
      console.log(`${state.name} eats ${food}`);
    },
  }),
  adopter: (state) => ({
    adopt(animal) {
      console.log(`${state.name} adopts ${animal.name}`);
    },
  }),
};

function User(name, age) {
  let user = {
    name,
    age,
  };

  return Object.assign(
    user,
    actions.sleeper(user),
    actions.player(user),
    actions.eater(user),
    actions.adopter(user)
  );
}

function Dog(name, type) {
  let dog = {
    name,
    type,
  };

  return Object.assign(
    dog,
    actions.sleeper(dog),
    actions.player(dog),
    actions.eater(dog)
  );
}

let newUser = new User("Dima", 21);
console.log(newUser.name);
newUser.sleep();

let newDog = new Dog("Alpha", "Shepherd");
console.log(newDog.type);
newDog.play();

newUser.adopt(newDog);
