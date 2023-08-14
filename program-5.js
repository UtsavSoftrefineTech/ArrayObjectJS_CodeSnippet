// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

// Function to count occurrences of repeated names in an array of objects

function countOccurrences(arr) {
  const nameCount = {};

  for (const employee of arr) {
    const { employeeName } = employee; // Extract the employee name from the object

    if (nameCount[employeeName]) {
      nameCount[employeeName]++;
    } else {
      nameCount[employeeName] = 1;
    }
  }

  const result = [];
  for (const name in nameCount) {
    result.push({ employeeName: name, occurrences: nameCount[name] });
  }

  return result;
}

// Input array of employee objects
const employeeArray = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

// Call the function and store the result
const resultArray = countOccurrences(employeeArray);

// Display the result
console.log(resultArray);
