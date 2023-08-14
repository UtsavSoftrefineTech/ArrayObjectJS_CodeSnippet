// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

function findLongestWord(input) {
  const arr = input.split(" ");
  let max = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }

  return max;
}

const input = "This is a demo String find the largest word from it";
const longestWord = findLongestWord(input);
console.log("Longest word:", longestWord);
