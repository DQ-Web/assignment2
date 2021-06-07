/*
filter()

Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” th
*/

if (!Array.prototype.myFind) {
    Array.prototype.myFind = function(callback) {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    }
}

/* TEST */
const arr1 = [1,2,3,4];

console.log('Array');
console.log(arr1);
console.log('Og Filter');
console.log(arr1.filter(x => x > 2));
console.log('My Filter');
console.log(arr1.myFind(x => x > 2));
