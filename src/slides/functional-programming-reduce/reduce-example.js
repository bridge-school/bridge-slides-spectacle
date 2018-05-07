const myList = [6, 2, 1, 9, 5, 3];

//in this example, the very first time the function passed into the reduce is called, accumulator is equal
// to 6, and current step is equal to 2. We are returning 6 + 2 (8).
// The next time the function in the reduce fires, the accumulator is equal to 8, and the currentStep is equal
// to 1. We return 8 + 1 (9). The next step we return  9 + 9 (18), the next step 18 + 5 (23) and the final step
// we return 23 + 3 - 26. As there is no more to return, the reduce loop finishes and the final variable
// is equal to 26 - notice it did NOT result in an array!
const final = myList.reduce(function(accumulator, currentStep){
  return accumulator + currentStep;
});