// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true
// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

function checkSubset(set1, set2) {
  // Convert the sets to arrays
  const array1 = Array.from(set1);
  const array2 = Array.from(set2);

  // Check if every element of set2 exists in set1
  const result = array1.every((element) => array2.includes(element));

  return result;
}

// Example 1
let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);
console.log("Output:", checkSubset(set1, set2));

// Example 2
set1 = new Set([3, 4]);
set2 = new Set([1, 2, 3, 4, 5]);
console.log("Output:", checkSubset(set1, set2));
