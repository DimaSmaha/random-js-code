//Create a function that takes in a multi-dimmensional array of the participants in a weight lifting contest,
//along with the total amount lifted.
//The function should print the name of the person, the amounts they lifted, and their place in the contest.
//The order should go backwards and give a trophy to the first place person.
//Modify the array to have more people and show that it still works. Let's use a max of 10 participants.

const malelifters = [
  ["Mark", 1020],
  ["Max", 980],
  ["Brad", 955],
  ["Jamie", 1050],
  ["Gerald", 970],
  ["Alex", 920],
  ["Steven", 990],
];
const femalelifters = [
  ["Megan", 385],
  ["Alice", 365],
  ["Beth", 350],
  ["Jenny", 400],
  ["Candice", 290],
  ["Amanda", 300],
  ["Mary", 220],
  ["Linda", 200],
  ["Jessica", 250],
  ["Becky", 320],
];

function getContestPlaces(arr) {
  arr.sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < arr.length; i++) {
    console.log(`Place ${i + 1}: ${arr[i].join(" - ")}`);
  }
}

getContestPlaces(malelifters);
console.log("-------------------------------");
getContestPlaces(femalelifters);
