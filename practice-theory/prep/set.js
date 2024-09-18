let arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9];

const newSet = new Set(arr);
const uniqueArr = [...newSet];

console.log(uniqueArr);
console.log(Math.max(...uniqueArr));
