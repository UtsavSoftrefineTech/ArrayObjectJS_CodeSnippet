// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
//     "JavaScript",
//     "Python",
//     "Java",
//     "C++",
//     "Ruby",
//     "Swift",
// ]

// Output: "JavaScript"

function getLongestString(arr) {
  let max = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }

  return max;
}

const arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];
const longestString = getLongestString(arr);
console.log("Output:", longestString);
