// function makePerson() {
//     return //this will turn into this: return;
//     {
//         name: 'Charlie',
//         age: 39
//     }
// }

// const x = 20
// const y = 10
// const z = x + y;
// (x+y).toString()

// setTimeout(function () {
//     for(let i = 0; i < 5; i++) {
//         console.log(i)
//     }
// },1000)

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

// function isPalindrom(str) {
//     let revStr = str.split('').reverse().join('')
//     if (str !== revStr) {
//         return false
//     }
//     return true
// }

// function sum(x,y) {
//     if (y !== undefined) {
//         return x + y;
//     } else {
//         return function(y) {return x + y;};
//     }
// }

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button')
//   btn.appendChild(document.createTextNode('Button ' + i))
//   btn.addEventListener('click', function () {
//     console.log(i)
//   })
//   document.body.appendChild(btn)
// }

// var globalVar = 'xyz'

// ;(function outerFunc(outerArg) {
//   var outerVar = 'a'

//   ;(function innerFunc(innerArg) {
//     var innerVar = 'b'

//     console.log(
//       'outerArg = ' +
//         outerArg +
//         '\n' +
//         'innerArg = ' +
//         innerArg +
//         '\n' +
//         'outerVar = ' +
//         outerVar +
//         '\n' +
//         'innerVar = ' +
//         innerVar +
//         '\n' +
//         'globalVar = ' +
//         globalVar
//     )
//   })(456)
// })(123)

//FACTORIAL
// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n
//   })(10)
// )
