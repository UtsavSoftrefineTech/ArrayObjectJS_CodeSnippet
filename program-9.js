// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

function getAllCombinations(str) {
  const combinations = [];

  for (let length = 1; length <= str.length; length++) {
    for (let startIndex = 0; startIndex <= str.length - length; startIndex++) {
      let currentCombination = "";
      for (let i = startIndex; i < startIndex + length; i++) {
        currentCombination += str[i];
      }
      combinations.push(currentCombination);
    }
  }

  return combinations;
}

// function getAllCombinations(str) {
//   const combinations = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       combinations.push(str.slice(i, j));
//     }
//   }

//   return combinations;
// }

const input = "Dog";
const output = getAllCombinations(input);
console.log(output);
