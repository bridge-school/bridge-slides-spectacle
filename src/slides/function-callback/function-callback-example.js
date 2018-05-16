// here is a normal function declaration
function myRegularFunction(a, b) {
  return a + b;
}

// here we are creating a new variable, and assigning myRegular function to this
const copiedRegFunction = myRegularFunction;

// this does not assign a function, but assigns the RESULT (return statement) of an invoked function
const resultOf3Plus4 = myRegularFunction(3, 4);

// This behaves the way myRegular function does, in fact if you put a debugger inside of myRegularFunction's
// definition, you'll see that it pauses when this function is invoked
copiedRegFunction(5, 10);
