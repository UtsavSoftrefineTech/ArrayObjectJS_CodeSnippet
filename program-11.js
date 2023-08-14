// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

function areAnagrams(str1, str2) {
  // Convert strings to lowercase and remove spaces
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Convert strings to arrays and sort them
  const sortedArr1 = [...cleanStr1].sort();
  const sortedArr2 = [...cleanStr2].sort();

  // Check if sorted arrays are equal
  return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
}

const example1Str1 = "evil";
const example1Str2 = "vile";
console.log(areAnagrams(example1Str1, example1Str2));

const example2Str1 = "a gentleman";
const example2Str2 = "elegant man";
console.log(areAnagrams(example2Str1, example2Str2));

const example3Str1 = "eleven plus two";
const example3Str2 = "twelve plus one";
console.log(areAnagrams(example3Str1, example3Str2));
