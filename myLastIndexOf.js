/*
lastIndexOf()

Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myLastIndexOf” that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
*/

Array.prototype.myLastIndexOf = function (input) {
  let index = -1;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === input) {
      index = i;
    }
  }
  return index;
};

/* TEST */

const arr = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log("lastIndexOf()");
console.log(arr.lastIndexOf("Dodo")); // 3
console.log(arr.lastIndexOf("Tiger")); // 1
console.log(arr.lastIndexOf("does not exist")); // -1

console.log("myLastIndexOf()");
console.log(arr.myLastIndexOf("Dodo")); // 3
console.log(arr.myLastIndexOf("Tiger")); // 1
console.log(arr.myLastIndexOf("does not exist")); // -1
