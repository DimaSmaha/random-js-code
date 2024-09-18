function getFibbonaciNumbers(num) {
  let fibArr = [0, 1];

  for (i = 0; i < num - 2; i++) {
    const newNumber = fibArr[i] + fibArr[i + 1];
    fibArr.push(newNumber);
  }

  return fibArr;
}

console.log(getFibbonaciNumbers(4));
console.log(getFibbonaciNumbers(5));
console.log(getFibbonaciNumbers(7));
console.log(getFibbonaciNumbers(8));
console.log(getFibbonaciNumbers(9));
console.log(getFibbonaciNumbers(19));
