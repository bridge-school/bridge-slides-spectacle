// this function expects two arguments, the first a number, the second a function (not the result of a function call)
function basicCallback(number, callback) {
  // I am passing the number into the callback, and assigning the result
  const result = callback(number);
  // and here I return the result
  return result;
}

// a little function that doubles a number and returns the result
const doubler = (number) => number * 2;

// here I call basicCallback and pass in the number 5, and a function that doubles as the second parameter
// can we guess what the result of basicCallback is?
basicCallback(5, doubler);

