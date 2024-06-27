function factorial(numToFactorial) {
  if (numToFactorial == 0) {
    return 1;
  }

  return numToFactorial * factorial(numToFactorial - 1);
}

console.log(factorial(2)); //2
console.log(factorial(5)); //120
console.log(factorial(6)); //720
console.log(factorial(10)); //3628800
