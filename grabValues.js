/*
Object.values()

Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object.
*/

Object.prototype.grabValues = function (obj) {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Object.grabValues called on non-object");

  let newArr = [];

  for (key in obj) {
    obj.hasOwnProperty(key) && newArr.push(obj[key]);
  }
  return newArr;
};

/* TEST */
const obj = { a: "somestring", b: 42, c: 0 };

console.log("Object.values()");
console.log(Object.values(obj));

console.log("Object.grabValues()");
console.log(Object.grabValues(obj));
