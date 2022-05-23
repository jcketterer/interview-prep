//RUNTIME: O(n^2) for loop with indexOf(essentially another loop)
// const squares = (nums1, nums2) => {
//   if (nums1.length !== nums2.length) return false
//   for (let i = 0; i < nums1.length; i++) {
//     const foundIdx = nums2.indexOf(nums1[i] ** 2)
//     if (foundIdx === -1) return false
//     nums2.splice(foundIdx, 1)
//   }
//   return true
// }

const freqCounter = arr => {
  const counter = {}
  for (let el of arr) {
    counter[el] = counter[el] + 1 || 1
  }
  return counter
}

const squares = (nums1, nums2) => {
  if (nums1.length !== nums2.length) return false
  const nums1Counter = freqCounter(nums1)
  const nums2Counter = freqCounter(nums2)

  for (let key in nums1Counter) {
    if (!nums2Counter[key ** 2]) return false
    if (nums1Counter[key] !== nums2Counter[key ** 2]) return false
  }
  return true
}

console.log(squares([1, 2, 3], [4, 9, 1]))
// console.log(squares([1, 2, 3], [4, 9]))
// console.log(squares([1, 2, 1], [4, 4, 1]))
console.log(squares([2, 2], [4, 4, 1]))
