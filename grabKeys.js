/*
Object.keys()

Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object.
*/

Object.prototype.grabKeys = function (obj) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Object.grabKeys called on non-object");

  let newArr = [];

  for (key in obj) {
    obj.hasOwnProperty(key) && newArr.push(key);
  }
  return newArr;
};

/* TEST */
const obj = { a: "somestring", b: 42, c: 0 };

console.log("Object.keys()");
console.log(Object.keys(obj));

console.log("Object.grabKeys()");
console.log(Object.grabKeys(obj));
