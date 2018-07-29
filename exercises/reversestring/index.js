// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // string to array
  arr = [...str];
  // empty array
  result = [];
  arr.forEach(char => {
    result.unshift(char);
  });
  return result.join``;
}

function reverse(str) {
  // counter
  let count = 0;
  // result
  let result = "";
  while (count < str.length) {
    result = str[count] + result;
    count += 1;
  }
  return result;
}

function reverse(str) {
  return str.split("").reverse().join``;
}

function reverse(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
// module.exports = reverse;

// Test Zone

string = "hello";

console.log(reverse(string));

module.exports = reverse;
