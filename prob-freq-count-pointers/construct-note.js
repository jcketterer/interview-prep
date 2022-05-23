// add whatever parameters you deem necessary

const freqCounterMap = str => {
  let freq = new Map()

  for (let val of str) {
    let count = freq.get(val) || 0
    freq.set(val, count + 1)
  }
  return freq
}

function constructNote(str1, str2) {
  const str1Count = freqCounterMap(str1)
  console.log(str1Count)
  const str2Count = freqCounterMap(str2)
  console.log(str2Count)

  if (str1Count.size === 0 && str2Count.size >= 0) return true

  for (let char of str1Count.keys()) {
    if (str1Count.get(char) <= str2Count.get(char)) return true
  }
  return false
}

console.log(constructNote('aabbcc', 'abc')) //false
console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true
console.log(constructNote('', 'abc')) //true
console.log(constructNote('skbjjjvnnd', 'fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd')) //true
