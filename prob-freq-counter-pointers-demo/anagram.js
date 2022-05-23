//OBJECT SOLUTION

const freqCounterObj = str => {
  const freq = {}
  for (let char of str) {
    freq[char] = freq[char] + 1 || 1
  }
  return freq
}

const validAnagramObj = (str1, str2) => {
  if (typeof str1 === 'number' || typeof str2 === 'number') return false
  if (str1.length !== str2.length) return false
  const str1Count = freqCounterObj(str1)
  const str2Count = freqCounterObj(str2)

  for (let key in str1Count) {
    if (str1Count[key] !== str2Count[key]) return false
  }
  return true
}

//MAP SOLUTION!

const freqCounterMap = str => {
  let freq = new Map()

  for (let val of str) {
    let count = freq.get(val) || 0
    freq.set(val, count + 1)
  }
  return freq
}

const validAnagramMap = (str1, str2) => {
  if (typeof str1 === 'number' || typeof str2 === 'number') return false
  if (str1.length !== str2.length) return false
  const str1Count = freqCounterMap(str1)
  const str2Count = freqCounterMap(str2)
  if (str1Count.size !== str2Count.size) return false
  for (let letter of str1Count.keys()) {
    if (str1Count.get(letter) !== str2Count.get(letter)) return false
  }
  return true
}

// console.log(validAnagramObj('', '')) // true
// console.log(validAnagramObj('aaz', 'zza')) // false
// console.log(validAnagramObj('anagram', 'nagaram')) // true
// console.log(validAnagramObj('rat', 'car')) // false
// console.log(validAnagramObj('awesome', 'awesom')) // false
// console.log(validAnagramObj('qwerty', 'qeywrt')) // true
// console.log(validAnagramObj('texttwisttime', 'timetwisttext')) // true
// console.log(validAnagramObj('111222', '121212'))

console.log(validAnagramMap('', '')) // true
console.log(validAnagramMap('aaz', 'zza')) // false
console.log(validAnagramMap('anagram', 'nagaram')) // true
console.log(validAnagramMap('rat', 'car')) // false
console.log(validAnagramMap('awesome', 'awesom')) // false
console.log(validAnagramMap('qwerty', 'qeywrt')) // true
console.log(validAnagramMap('texttwisttime', 'timetwisttext')) // true
