function curriedAdd(total) {
  if (total === undefined) return 0;
  return function addNextNum(num) {
    if (num === undefined) return total;
    total += num;
    return addNextNum;
  };
}

let first = curriedAdd();
let second = curriedAdd(3)(2)();
let third = curriedAdd(4)(3)(5)(10)();

console.log(first);
console.log(second);
console.log(third);

module.exports = { curriedAdd };
