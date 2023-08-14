// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

function countCharacterFrequency(inputString) {
  const frequencyMap = {};

  for (const char of inputString) {
    if (frequencyMap[char]) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
    }
  }

  return frequencyMap;
}

const input = "hello";
console.log(countCharacterFrequency(input));
