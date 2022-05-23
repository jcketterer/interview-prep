//Implement a function that counts the number of times a letter appears in a string.

//BREAK IT DOWN

/**
 * function charCount(str) {
 * - create empty object to hold the count of characters
 * - Loop over each character in the string
 * -- If char is letter or number then downcase first
 * ---- If char is in the object then add 1 to the count
 * ---- Otherwise, add to object and set count to 1
 * - return object with count of characters
 * }
 */

//Breaking it down to a simpler problem.

// function charCount(string) {
//   const obj = {}

//   for (let char of string) {
//     if (/[A-Z0-9]/i.test(char)) {
//       char = char.toLowerCase()
//       if (obj[char]) {
//         obj[char] += 1
//       } else {
//         obj[char] = 1
//       }
//     }
//   }

//   return obj
// }

//DIFFERENT VERSION
function charCount(string) {
  const obj = {}

  if (typeof string !== 'string') return 'please enter a string'

  for (let char of string) {
    if (/[A-Z0-9]/i.test(char)) {
      char = char.toLowerCase()
      obj[char] = obj[char] + 1 || 1
    }
  }

  return obj
}

//USING AN ARRAY METHOD!S
// function charCount(string) {
//   const obj = {}

//   if (typeof string !== 'string') return 'please enter a string'

//   return string.split('').reduce((obj, char) => {
//     if (/[A-Z0-9]/i.test(char)) {
//       char = char.toLowerCase()
//       obj[char] = obj[char] + 1 || 1
//     }
//     return obj
//   }, {})
// }

//COMPLETELY DIFFERENT APPROACH
// function charCount(str) {
//   return str
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('')
//     .match(/([a-z0-9])\1*/g)
//     .reduce((prev, cur) => {
//       return Object.assign(prev, { [cur[0]]: cur.length })
//     }, {})
// }

console.log(charCount('hihihihihihio'))
