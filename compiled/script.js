"use strict";

// Zadanie pierwsze
var x = 'Hello';
var y = 'World';
var xy = "".concat(x, " ").concat(y);
console.log(xy); // Zadanie drugie

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(3, 2));
console.log(multiply(5)); // Zadanie trzecie

var average = function average() {
  var sum = 0;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    sum += arg;
    return sum;
  });
  var avg = sum / args.length;
  return avg;
};

console.log(average(1, 2, 4, 6, 8, 10)); // Zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(void 0, grades)); // Zadanie piąte

var _ref = [1, 4, 'Iwona', false, 'Nowak'],
    firstName = _ref[2],
    lastName = _ref[4];
console.log(firstName, lastName);