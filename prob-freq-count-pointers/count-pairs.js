// add whatever parameters you deem necessary

//O(n log n) / O(1)
function countPairs(arr, sumTarget) {
  arr.sort((a, b) => a - b)
  let count = 0
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === sumTarget) {
      count++
      left++
      right--
    } else if (sum < sumTarget) {
      left++
    } else {
      right--
    }
  }
  return count
}

//O(n) / O(n)

function countPairsButFaster(arr, sumTarget) {
  let s = new Set(arr)
  let count = 0

  for (let num of arr) {
    s.delete(num)
    if (s.has(sumTarget - num)) {
      count++
    }
  }
  return count
}

console.log(countPairsButFaster([3, 1, 5, 4, 2], 6))
console.log(countPairsButFaster([10, 4, 8, 2, 6, 0], 10))
console.log(countPairsButFaster([4, 6, 2, 7], 10))
console.log(countPairsButFaster([1, 2, 3, 4, 5], 10))
console.log(countPairsButFaster([1, 2, 3, 4, 5], -3))
console.log(countPairsButFaster([0, -4], -4))
console.log(countPairsButFaster([1, 2, 3, 0, -1, -2], 0))
