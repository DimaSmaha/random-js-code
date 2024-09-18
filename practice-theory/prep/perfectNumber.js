/**
 * In number theory, a perfect number is a positive integer that is equal to the sum of its positive proper divisors,
 * that is, divisors excluding the number itself.
 * For instance, 6 has proper divisors 1, 2 and 3, and 1 + 2 + 3 = 6, so 6 is a perfect number.
 */

function isPerfect(num) {
  let dividerArr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      dividerArr.push(i);
    }
  }

  let arrSum = dividerArr.reduce((el, acc) => (acc += el), 0);

  if (num == arrSum) {
    return true;
  }
  return false;
}

function getPerfectNumbers(num) {
  let perfectArr = [];
  let startNum = 2;
  while (perfectArr.length !== num) {
    if (isPerfect(startNum)) {
      perfectArr.push(startNum);
    }
    startNum++;
  }

  return perfectArr;
}

console.log(isPerfect(5));
console.log(isPerfect(6));
console.log(isPerfect(28));
console.log(isPerfect(496));
console.log(isPerfect(555));
console.log(isPerfect(8128));
console.log("------------------");
console.log(getPerfectNumbers(2));
console.log(getPerfectNumbers(4));
