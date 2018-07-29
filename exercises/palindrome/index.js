// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
function palindrome(str) {
  return str === str.split("").reduce((rev, char) => char + rev, "");
}
function palindrome(str) {
  // length of str
  let strL = str.length;
  // counter
  let count = 0;
  while (count < Math.floor(strL / 2)) {
    str[count] === str[strL];
    count += 1;
  }
}
// Test Zone
string = "abba";
console.log(palindrome(string));

module.exports = palindrome;
