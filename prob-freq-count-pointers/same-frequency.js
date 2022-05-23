// add whatever parameters you deem necessary
function frequency(num) {
  let count = {}

  for (let n of num.toString()) {
    count[n] = ++count[n] || 1
  }

  return count
}

function sameFrequency(num1, num2) {
  num1Freq = frequency(num1)
  num2Freq = frequency(num2)
  console.log(num1Freq, num2Freq)
  if (num1Freq.length !== num2Freq.length) return false

  for (let key in num1Freq) {
    if (num1Freq[key] !== num2Freq[key]) return false
  }
  return true
}

// console.log(frequency(12121212))
console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))
