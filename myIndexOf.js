/*
indexOf()

Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function titled “myIndexOf” that will take in an array of elements and returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
*/

Array.prototype.myIndexOf = function (input) {
  let index = -1;

  for (let i = 0; i < this.length; i++) {
    if (this[i] === input) {
      index = i;
      return index;
    }
  }
  return index;
};

/* TEST */
const arr = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log("indexOf()");
console.log(arr.indexOf("Dodo")); // 0
console.log(arr.indexOf("Tiger")); // 1
console.log(arr.indexOf("does not exist")); // -1

console.log("myIndexOf()");
console.log(arr.myIndexOf("Dodo")); // 0
console.log(arr.myIndexOf("Tiger")); // 1
console.log(arr.myIndexOf("does not exist")); // -1
