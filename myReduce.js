/*
reduce()

Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” that will take in an array of elements and execute a callback function on each of those elements.
*/

Array.prototype.myReduce = function (callback, initial) {
    let accumulator = initial;


    for (let i = 0; i < this.length; i++) {
        if (initial == undefined) {
            accumulator = this[i];
            continue;
        }

        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}
/* TEST */
arr1 = [1, 2, 3, 4, 5];

let result = arr1.reduce((sum, number) => { return sum + number; }, 0);

console.log("reduce()");
console.log(result);

result = arr1.myReduce((sum, number) => { return sum + number; }, 0);

console.log("myReduce()");
console.log(result);