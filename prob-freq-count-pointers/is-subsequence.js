// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let str1Idx = 0
  let str2Idx = 0

  if (!str1) return true

  while (str2Idx < str2.length) {
    if (str2[str2Idx] === str1[str1Idx]) {
      str1Idx++
    }
    if (str1Idx === str1.length) return true
    str2Idx++
  }
  return false
}

console.log(isSubsequence('', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
