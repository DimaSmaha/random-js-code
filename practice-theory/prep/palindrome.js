const str1 = "zxczxc";
const str2 = "abba";
const str3 = "a";
const str4 = "racer";
const str5 = "some emos";
const str6 = "something";
const str7 = "ababagalalagababa";

function isPalindrome(palindromeString) {
  let tempStr = "";

  for (i = palindromeString.length - 1; i >= 0; i--) {
    tempStr += palindromeString[i];
  }

  console.log(`Original ${palindromeString}`);
  console.log(`Revert ${tempStr}`);

  const isPali = palindromeString == tempStr;

  return isPali;
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
console.log(isPalindrome(str5));
console.log(isPalindrome(str6));
console.log(isPalindrome(str7));
