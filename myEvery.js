/*
every()

Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” that will take in an array of elements and execute a callback function on each of those elements.
*/

Array.prototype.myEvery = function (callback) {
    for (let i=0; i < this.length; i++) {
        if(!callback(this[i], i, this)) {
            return false;
        }
    }
    return true
}
/* TEST */
let arr1 = [1, 2, 3];

console.log("every()");
console.log(arr1.every(value => Number.isInteger(value)));

console.log("myEvery()");
console.log(arr1.myEvery(value => Number.isInteger(value)));