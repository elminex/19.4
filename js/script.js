// Zadanie pierwsze
const x = 'Hello';
const y = 'World';
const xy = `${x} ${y}`;
console.log(xy);

// Zadanie drugie

const multiply = (a, b = 1) => (a * b);
console.log(multiply(3, 2));
console.log(multiply(5));

// Zadanie trzecie

const average = (...args) => {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
    return sum;
  });
  const avg = (sum / args.length);
  return avg;
};
console.log(average(1, 2, 4, 6, 8, 10));

// Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// Zadanie piąte

const [, , firstName, , lastName] = [1, 4, 'Iwona', false, 'Nowak'];
console.log(firstName, lastName);
