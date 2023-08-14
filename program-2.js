// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

function convertArrayToObject(twoDimensionalArray) {
  const resultObject = {};

  twoDimensionalArray.forEach((subArray) => {
    const key = subArray[0];
    const value = subArray[1];
    resultObject[key] = value;
  });

  return resultObject;
}

const dataArray = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15],
];

const convertedObject = convertArrayToObject(dataArray);
console.log(convertedObject);
