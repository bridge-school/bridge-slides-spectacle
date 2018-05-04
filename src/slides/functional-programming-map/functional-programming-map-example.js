const listOfNumbers = [1, 2, 3, 4, 5];

// this results in the array [2, 4, 6, 8, 10] - and this does NOT effect the original
// listOfNumbers is still [1, 2, 3, 4, 5]
const addIndexToNumber = listOfNumbers.map(num => num * 2);
