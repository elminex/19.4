"use strict";

var x = 'Hello';
var y = 'World';
var xy = "".concat(x, " ").concat(y);
console.log(xy);

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(3, 2));
console.log(multiply(5));