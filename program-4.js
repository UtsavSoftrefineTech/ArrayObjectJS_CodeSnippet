// Write a JavaScript program to get the index of an object by it's property.

// Input:
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

// Function to get the index of an object by its property
function getObjectIndexByProperty(objectsArray, propertyKey, propertyValue) {
  for (const index in objectsArray) {
    if (objectsArray[index].hasOwnProperty(propertyKey)) {
      if (objectsArray[index][propertyKey] === propertyValue) {
        return index;
      }
    }
  }
  return -1;
}

// Array of objects
const arrayOfObjects = [
  {
    prop_1: "val_1",
    prop_2: "val_2",
    prop_3: "val_3",
  },
  {
    prop_1: "val_4",
    prop_2: "val_5",
    prop_3: "val_6",
  },
];

// Property key and value to search for
const propertyKeyToSearch = "prop_1";
const propertyValueToSearch = "val_4";

// Get the index of the object with the specified property
const resultIndex = getObjectIndexByProperty(
  arrayOfObjects,
  propertyKeyToSearch,
  propertyValueToSearch
);

// Display the result
if (resultIndex === -1) {
  console.log("object not found");
} else {
  console.log("Index of the object:", resultIndex);
}
