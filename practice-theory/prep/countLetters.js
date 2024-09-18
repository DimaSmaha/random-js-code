const word1 = "Letter";
const word2 = "Lamp";
const word3 = "Fall";
const word4 = "Something";
const word5 = "Omg its huge";
const word6 = "Emerald";

function countLetters(word) {
  if (word.includes(" ")) {
    let countsArr = [];
    let splitArr = word.split(" ");
    for (let i = 0; i < splitArr.length; i++) {
      let wordFromArray = splitArr[i];

      countsArr.push(wordFromArray.length);
    }

    return countsArr;
  }

  if (!word.includes(" ")) {
    return word.length;
  }

  return false;
}

console.log(countLetters(word1));
console.log(countLetters(word2));
console.log(countLetters(word3));
console.log(countLetters(word4));
console.log(countLetters(word5));
console.log(countLetters(word6));
