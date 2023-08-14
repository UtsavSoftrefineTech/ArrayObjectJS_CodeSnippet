// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

function groupElementsByProperty(arr, propertyName) {
  const obj = {};

  arr.forEach((element) => {
    const propertyValue = element[propertyName];
    if (!obj[propertyValue]) {
      obj[propertyValue] = [];
    }
    obj[propertyValue].push(element.id);
  });

  const result = {};
  for (const propertyValue in obj) {
    result[propertyValue] = obj[propertyValue];
  }

  return result;
}

const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];

const propertyName = "name";
const groupedData = groupElementsByProperty(arr, propertyName);

console.log(groupedData);
