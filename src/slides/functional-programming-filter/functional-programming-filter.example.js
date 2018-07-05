const listOfNumbers = [3, 1, 6, 2, 9];

// the callback function passed into filter expects the first argument to
// represent the current value being iterated over in the array.
// ex. the function fires 5 times in this case and the first time it fires
// num is equal to 3, the second time, it's equal to 1
const lessThan5 = listOfNumbers.filter(function(num){
  return num < 5;
});

// or with an arrow function
const lessThan5 = listOfNumbers.filter(num => num < 5);
