const myList = [6, 2, 1, 9, 5, 3];

// Let's trace the values through each iteration of this reduce:
//  First iteration: accumulator = 0, currentStep = 6; returns 6
//  Second iteration: accumulator = 6, currentStep = 2; returns 8
//  Third iteration: accumulator = 8, currentStep = 1; returns 9
//  Fourth iteration: accumulator = 9, currentStep = 9, returns 18
//  Fifth iteration: accumulator = 18, currentStep = 5, returns 23
//  Sixth iteration: accumulator = 23, currentStep = 3, returns 26
//  The final value is 26 -- notice, it's not an array!
const final = myList.reduce(function(accumulator, currentStep){
  return accumulator + currentStep;
}, 0);