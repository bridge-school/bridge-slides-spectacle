// we can see that number2 has an assignment, = 8
// this assignment is only applied if nothing is passed in as a second argument
function addNumbers(number1, number2 = 8) {
  return number1 + number2;
}

// 5 gets set to number1
// Without a second argument, number2 is set to 8
const total = addNumbers(5); // resolves to 13

// here we can see using this ... (spread) operator in parameter definitions
// by doing so, we are saying "take all the arguments passed in, and turn them into an array"
function keepTheLastItem(...items) {
  return items[items.length -1];
}

keepTheLastItem(3, 1, 66, 21, 15); // this returns 15
