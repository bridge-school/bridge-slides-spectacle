// within my parenthesis, 10 resolves first, and then we multiply that by 2 giving us 20
const result1 = (5 + 5) * 2;

// without parenthesis, 5 * 2 resolves first, and then we add 5 to it, giving us 15
const result2 = 5 + 5 * 2;

// we can use parenthesis in clever ways, here there are two important pieces
// ((number1, number2) => number1 * number2) - this 'resolves' the function declaration inline, without
// assigning it to a variable, and then right after (3, 4) is applies to that 'invisible' variable
// kind of line this: invisibleVariable(3, 4)
((number1, number2) => number1 * number2)(3, 4);