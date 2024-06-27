function isPalindrome(paliWord) {
  let reverseString = "";

  for (i = paliWord.length - 1; i >= 0; i--) {
    reverseString += paliWord[i];
  }

  return reverseString === paliWord ? true : false;
}

console.log(isPalindrome("a")); //true
console.log(isPalindrome("aaa")); //true
console.log(isPalindrome("abcaa")); //false
console.log(isPalindrome("abba")); //true
console.log(isPalindrome("laalaal")); //true
console.log(isPalindrome("asgnnkas")); //false

function isPalindromeMethods(paliWord) {
  let reverseString = paliWord.split("").reverse().join("");

  return reverseString === paliWord ? true : false;
}
console.log("NEW METHOD");

console.log(isPalindromeMethods("a")); //true
console.log(isPalindromeMethods("aaa")); //true
console.log(isPalindromeMethods("abcaa")); //false
console.log(isPalindromeMethods("abba")); //true
console.log(isPalindromeMethods("laalaal")); //true
console.log(isPalindromeMethods("asgnnkas")); //false
