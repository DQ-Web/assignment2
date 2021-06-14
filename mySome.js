/*
some() (aka any())

Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” that will take in an array of elements and execute a callback function on each of those elements.
*/
if (!Array.prototype.mySome) {
  Array.prototype.mySome = function (callback) {
    if (this == null) {
      throw new TypeError("Array.prototype.mySome called on null or undefined");
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return true;
      }
    }

    return false;
  };
}

/* TEST */
function isBiggerThan10(element, index, array) {
  return element > 10;
}

arr1 = [2, 5, 8, 1, 4];
arr2 = [12, 5, 8, 1, 4];

console.log("some()");
console.log(arr1.some(isBiggerThan10)); // false
console.log(arr2.some(isBiggerThan10)); // true

console.log("mySome()");
console.log(arr1.mySome(isBiggerThan10)); // false
console.log(arr2.mySome(isBiggerThan10)); // true
