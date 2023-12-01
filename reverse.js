function reverseString(string) {
  let arrayOfChars = [];
  let str = "";
  for (ch of string) {
    arrayOfChars.push(ch);
  }
  for (i = arrayOfChars.length - 1; i >= 0; i--) {
    str += arrayOfChars[i];
  }
  console.log(str);
}

reverseString("somes string");

function reverseString2(string) {
  let str = "";
  for (i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  console.log(str);
}

reverseString2("somes string");
