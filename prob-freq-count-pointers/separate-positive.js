// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if (arr[left] < 0 && arr[right] > 0) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    } else {
      if (arr[left] > 0) left++
      else right--
    }
  }
  return arr
}

console.log(separatePositive([1, 2, 3]))
console.log(separatePositive([-1, -2, -3]))
console.log(separatePositive([2, -1, -3, 6, -8, 10]))
console.log(separatePositive([5, 10, -15, 20, 25]))
