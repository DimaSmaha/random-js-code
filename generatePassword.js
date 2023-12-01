/* Pass types
 * 1 - Only letters
 * 2 - Only numbers
 * 3 - Letters and numbers
 */

function generatePassword(passLength, passType, doWeNeedSpecialCharacters) {
  let generatedPassword = "";
  const passwordLetters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordNumbers = "1234567890";
  const specialCharacters = "`~!@#$%^&*()_-+={[}}|:;\",'<>.?/";
  let charset = "";
  if (doWeNeedSpecialCharacters) {
    charset += specialCharacters;
  }

  for (i = 0; i < passLength; i++) {
    if (passType == 1) {
      charset += passwordLetters;
      const randomChar = Math.floor(Math.random() * (charset.length + 1));
      generatedPassword += charset.charAt(randomChar);
    }

    if (passType == 2) {
      charset += passwordNumbers;
      const randomChar = Math.floor(Math.random() * (charset.length + 1));
      generatedPassword += charset.charAt(randomChar);
    }

    if (passType == 3) {
      charset += passwordLetters + passwordNumbers;
      const randomChar = Math.floor(Math.random() * (charset.length + 1));
      generatedPassword += charset.charAt(randomChar);
    }
  }
  return generatedPassword;
}

console.log(generatePassword(32, 2, true));
