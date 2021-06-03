/* 
forEach()

Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” that will take in an array of elements and execute any callback function on each of those elements.
*/

const arr = [1, 2, 3];

Array.prototype.myEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    callbackFn(this[i], i, this);
  }
};

console.log("myeach: ");
arr.myEach((x) => console.log(x));

console.log("forEach: ");
arr.forEach((x) => console.log(x));
