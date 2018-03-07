
const numA = 5;
const numB = 3;


// Impure
function addTwo() {
  console.log(numA, numB);
}
addTwo();

//pure
function add2(num1, num2) {
  return num1 + num2;
}

console.log(add2(3, 9));
