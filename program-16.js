// Write a JavaScript program to find intersection of two sets.

// Input:
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

function findIntersection(setA, setB) {
  const intersectionSet = new Set(
    [...setA].filter((element) => setB.has(element))
  );
  return intersectionSet;
}

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

const intersectionResult = findIntersection(setA, setB);
console.log("Intersection:", Array.from(intersectionResult));
