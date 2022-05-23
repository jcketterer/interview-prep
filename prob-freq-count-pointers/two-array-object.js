// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  return (result = arr1.reduce((acc, currItem, index) => {
    acc[currItem] = arr2[index] ? arr2[index] : null
    return acc
  }, {}))
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])) // {'a': 1, 'b': 2, 'c': 3, 'd': null})
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])) // {'a': 1, 'b': 2, 'c': 3})
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])) // {'x': 1, 'y': 2, 'z': null})
console.log(twoArrayObject(['w', 'x', 'y', 'z'], [3, 4]))
