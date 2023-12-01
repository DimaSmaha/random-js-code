let arr1 = [7, 1, 5, 3];
let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [1, 4, 5, 2, 6];
let arr4 = [6, 5, 4, 3, 2, 1];

function sortArray(inputArray, order) {
  function replaceBiggerAndSmallerElements() {
    for (i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        let tempVariable = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = tempVariable;
      }
    }
  }
  function checkIfArraySortedAsc() {
    for (i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        return true;
      }
    }
  }
  if (order == "ASC") {
    while (checkIfArraySortedAsc()) {
      replaceBiggerAndSmallerElements();
    }
  }

  function replaceSmallerAndBigger() {
    for (i = 0; i < inputArray.length; i++) {
      if (inputArray[i] < inputArray[i + 1]) {
        let tempVariable = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = tempVariable;
      }
    }
  }
  function checkIfArraySortedDesc() {
    for (i = 0; i < inputArray.length; i++) {
      if (inputArray[i] < inputArray[i + 1]) {
        return true;
      }
    }
  }
  if (order == "DESC") {
    while (checkIfArraySortedDesc()) {
      replaceSmallerAndBigger();
    }
  }

  return inputArray;
}

console.log(sortArray(arr1, "ASC"));
console.log(sortArray(arr2, "DESC"));
console.log(sortArray(arr3, "ASC"));
console.log(sortArray(arr4, "ASC"));

function sortArray2(inputArray, order) {
  if (order == "DESC") {
    inputArray.sort(function (a, b) {
      return b - a; // Sort in descending order
    });
  }
  if (order == "ASC") {
    inputArray.sort(function (a, b) {
      return a - b; // Sort in ascending order
    });
  }

  return inputArray;

  //   .sort(function (a, b) {
  //     1. result is <0  a will be first
  //     2. result is 0 nothing changed
  //     3. result is >0 b will be first
  //   });
}

console.log(sortArray2(arr1, "ASC"));
console.log(sortArray2(arr2, "DESC"));
console.log(sortArray2(arr3, "ASC"));
