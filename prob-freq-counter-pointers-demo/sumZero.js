const sumZero = nums => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break

    for (let j = i + 1; j < nums.length; j++) {
      console.log('i:', nums[i], 'j:', nums[j])
      if (nums[i] + nums[j] === 0) {
        return [nums[i], nums[j]]
      }
    }
  }
}

//MULTIPLE POINTERS SOLUTION

const sumZeroWithMultPointers = nums => {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const sum = nums[left] + nums[right]
    if (sum === 0) {
      return [nums[left], nums[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// [-30, -21, -10, -5, -4, -3, -2, -1, 0, 3, 6, 99]

console.log(sumZeroWithMultPointers([-30, -21, -10, -5, -4, -3, -2, -1, 0, 3, 6, 99]))
