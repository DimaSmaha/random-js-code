const str1 = "A cat can jump up to five times.";
const str2 = "All cats need taurine in their diet to avoid blindness.";

console.log(str1.split("").reverse().join(""));
console.log(str2.split("").reverse().join(""));

function reverseStr(str) {
  let arr = [];
  let reverseStr = "";

  for (const char of str) {
    arr.push(char);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseStr += arr[i];
  }

  return reverseStr;
}

console.log(reverseStr(str1));
console.log(reverseStr(str2));
