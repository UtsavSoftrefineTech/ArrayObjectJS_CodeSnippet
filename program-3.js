// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

function flattenObject(obj) {
  let flattenedObj = {};

  function traverseAndFlatten(currentNode, target, currentKey) {
    for (let key in currentNode) {
      if (currentNode.hasOwnProperty(key)) {
        let newKey;
        if (currentKey === undefined) {
          newKey = key;
        } else {
          newKey = currentKey + "." + key;
        }

        let value = currentNode[key];
        if (typeof value === "object") {
          traverseAndFlatten(value, target, newKey);
        } else {
          target[newKey] = value;
        }
      }
    }
  }

  traverseAndFlatten(obj, flattenedObj);
  return flattenedObj;
}

const inputObj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

let flattenedOutput = flattenObject(inputObj);
console.log(flattenedOutput);
