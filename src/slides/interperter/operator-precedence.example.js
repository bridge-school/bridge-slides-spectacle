const addNumbers = (number1, number2) => number1 + number2;

// The interpreter resolves the result of addNumbers,
// in this case it's 9, and then it applies 9 to 'result'
const result = addNumbers(5, 4);

// Here the interpreter resolves addNumbers to 5, and THEN it resolves 6 * 2,
// so you can think of the next phase looking like const result = 5 + 12
// the final value is 17
const result2 = addNumbers(3, 2) + 6 * 2;

// here the addNumbers(2, 5) resolves first! that gives us 7,
// so the next step is addNumbers(7, 8)
const result3 = addNumbers(addNumbers(2, 5), 8);