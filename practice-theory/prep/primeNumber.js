// A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers

// function getPrimeNumbers(num) {
//   let primeArr = [];
//   let startNum = 1;
//   while (primeArr.length != num) {
//     for (let i = 1; i <= startNum; i++) {
//       if (startNum % i === 0) {
//         if (i !== startNum) {
//           break;
//         }
//         primeArr.push(startNum);
//       }
//     }
//     startNum++;
//   }
//   return primeArr;
// }

function isPrime(num) {
  const dividerArr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      dividerArr.push(i);
    }
  }
  //   console.log(dividerArr);
  if (dividerArr.length === 2) {
    return true;
  }
  return false;
}

function getPrimeNumbers(num) {
  let primeArr = [];

  let startNum = 1;
  while (primeArr.length != num) {
    if (isPrime(startNum)) {
      primeArr.push(startNum);
    }
    startNum++;
  }

  return primeArr;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(5));
console.log("------------------");
console.log(getPrimeNumbers(3));
console.log(getPrimeNumbers(5));
console.log(getPrimeNumbers(7));
console.log(getPrimeNumbers(17));
