/*
map()

Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in an array of elements and execute a callback function on each of those elements.
*/
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      let mapItem = callback(this[i], i, this);
      newArr.push(mapItem);
    }
    return newArr;
  };
}

/* TEST */
const arr1 = [1, 2, 3, 4];
const mapOg = arr1.map((x) => x * 2);
const map1 = arr1.myMap((x) => x * 2);

console.log("map()");
console.log(mapOg);

console.log("myMap()");
console.log(map1);
