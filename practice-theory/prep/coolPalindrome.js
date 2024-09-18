const str1 = "zxczxc";
const str2 = "abba";
const str3 = "a";
const str4 = "racer";
const str5 = "some emos";
const str6 = "something";
const str7 = "ababagalalagababa";

function coolPalindrome(palindromeString) {
  const arr = [...palindromeString];
  const reverseArr = arr.reverse();
  const reverseStr = reverseArr.join("");

  console.log(`Original ${palindromeString}`);
  console.log(`Revert ${reverseStr}`);

  const isPali = palindromeString == reverseStr;

  return isPali;
}

console.log(coolPalindrome(str1));
console.log(coolPalindrome(str2));
console.log(coolPalindrome(str3));
console.log(coolPalindrome(str4));
console.log(coolPalindrome(str5));
console.log(coolPalindrome(str6));
console.log(coolPalindrome(str7));
