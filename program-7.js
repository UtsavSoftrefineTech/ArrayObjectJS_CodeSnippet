//  Write a JavaScript program to filter an array of objects based on a given property value

// Input:
// arr = [
//     {
//         id: 1,
//         name: "John",
//         department: "HR",
//     },
//     {
//         id: 2,
//         name: "Alice",
//         department: "IT",
//     },
//     {
//         id: 3,
//         name: "Bob",
//         department: "Finance",
//     },
//     {
//         id: 4,
//         name: "Hank",
//         department: "IT",
//     },
// ]
// property = "department";
// value = "IT";

// Output:
// [
//     { id: 2, name: 'Alice', department: 'IT' },
//     { id: 4, name: 'Hank', department: 'IT' }
// ]

function filterArray(array, property, value) {
  return array.filter(
    (obj) => obj.hasOwnProperty(property) && obj[property] === value
  );
}

// function filterArray(array, property, value) {
//   const result = [];
//   for (const obj of array) {
//     if (obj.hasOwnProperty(property)) {
//       if (obj[property] === value) {
//         result.push(obj);
//       }
//     }
//   }
//   return result;
// }

const arr = [
  {
    id: 1,
    name: "John",
    department: "HR",
  },
  {
    id: 2,
    name: "Alice",
    department: "IT",
  },
  {
    id: 3,
    name: "Bob",
    department: "Finance",
  },
  {
    id: 4,
    name: "Hank",
    department: "IT",
  },
];

const property = "department";
const value = "IT";

console.log(filterArray(arr, property, value));
