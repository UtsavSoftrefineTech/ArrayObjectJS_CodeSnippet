// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:
// arr = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
//  ]

// Output:
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ]

function objectModify(arr, property, value, updateValue) {
  for (const obj of arr) {
    // Check if the current object has the specified property and its value matches the given value
    if (obj.hasOwnProperty(property) && obj[property] === value) {
      obj[property] = updateValue;
    }
  }
  return arr;
}

const arr = [
  {
    employee_id: 1,
    employee_name: "Aman",
  },
  {
    employee_id: 2,
    employee_name: "Bhargava",
  },
  {
    employee_id: 3,
    employee_name: "Chaitanya",
  },
];

const property = "employee_name";
const value = "Bhargava";
const updateValue = "Rahul";

console.log(objectModify(arr, property, value, updateValue));
