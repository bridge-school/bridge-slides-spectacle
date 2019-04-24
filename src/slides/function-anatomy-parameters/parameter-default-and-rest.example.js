// we can see that number2 has an assignment, = 8
// this assignment is only applied if a second argument isn't passed in
function addNumbers(number1, number2 = 8) {
  return number1 + number2;
}

// number1 gets the value of 5
// Without a second argument, number2 is set to 8
const total = addNumbers(5); // resolves to 13

// we can also use the rest operator (...) in the parameter definition
// this will take all arguments passed in and put them into a single array
function keepTheLastItem(...items) {
  return items[items.length - 1];
}

keepTheLastItem(3, 1, 66, 21, 15); // this returns 15
