// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

function containsAllValues(obj1, obj2) {
  for (const key in obj2) {
    // Using hasOwnProperty Method
    if (!obj1.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }

    // Using in operator
    // if (!"key" in obj1 || obj1[key] !== obj2[key]) {
    //   return false;
    // }

    // Comparing with undefined
    // if (!obj1.key === undefined || obj1[key] !== obj2[key]) {
    //   return false;
    // }
  }
  return true;
}

// Example 1
const obj1Example1 = { name: "John", age: 23, degree: "CS" };
const obj2Example1 = { age: 23, degree: "CS" };
console.log(containsAllValues(obj1Example1, obj2Example1));

// Example 2
const obj1Example2 = { name: "John", degree: "CS" };
const obj2Example2 = { name: "Max", age: 23, degree: "CS" };
console.log(containsAllValues(obj1Example2, obj2Example2));
