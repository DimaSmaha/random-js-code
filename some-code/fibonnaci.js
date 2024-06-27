function fibonnaci(numOfFibNums) {
  let fibArr = [0, 1];

  for (i = 0; i < numOfFibNums; i++) {
    let newFibNum = fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1];
    fibArr.push(newFibNum);
  }

  return fibArr;
}

console.log(fibonnaci(5));
console.log(fibonnaci(8));
console.log(fibonnaci(10));
