function palindrome(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz123456789".split("");
  const charArr = [...str.toLowerCase()];
  let cleanStr = [];
  for (const char of charArr) {
    if (alphabet.includes(char)) {
      cleanStr.push(char);
    }
  }
  const reversed = [...cleanStr].reverse();
  for (let i = 0; i <= cleanStr.length; i++) {
    if (reversed[i] !== cleanStr[i]) {
      return false;
    }
  }

  return true;
}
palindrome("eye");
palindrome("_eye");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("almostomla");
palindrome("1 eye for of 1 eye.");
