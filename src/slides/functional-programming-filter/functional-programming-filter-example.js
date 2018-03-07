const listOfNumbers = [1, 2, 3, 4, 5];

const lessThan3 = listOfNumbers.filter(function(num, index){
  return num < 3; // this 'evaluates' to true or false, depending on the value of num
});
