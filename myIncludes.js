/*
includes()

Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled “myIncludes” that will take in an array of elements and indicate whether or not a target element is contained within the input array. This returns a boolean.
*/

Array.prototype.myIncludes = function(value) {
    for (let i = 0; i < this.length; i++) {
        if (value === this[i]) {
            return true;
        }
    }
    return false;
}
/* TEST */

let arr1 = [1, 2, 3];

console.log("includes()");
console.log(arr1.includes(3));

console.log("myIncludes()");
console.log(arr1.myIncludes(3));