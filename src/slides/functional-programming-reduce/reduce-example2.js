const myList = ['John', 'Jacob', 'Jingleheimer', 'Schmidt'];

// for the parameter names I'll use the shorthands acc and next
// Look carefully at the reduce method, it's taking TWO arguments. The first is a function,
// the second is an empty object! That means the first time the callback function fires, acc is going to
// equal {} - an empty object. We can use this to be clever
const namesGroupedByFirstLetter = myList.reduce(function(acc, next) {
   // update the acc object, and set the first letter of one of the names in the list to equal
   // a new array, where we take whatever is already there (or if nothing is there, an empty array)
  // and combine it with the next name in the list. For example, the first time this fires, we say
  // acc[J] = [].concat([], 'John'), which results in an object that looks like
  // { J: ['John'] }. Each additional call adds to that array of J's, { J: ['John', 'Jacob', 'Jingleheimer'] }
  // until the last one where have a name that starts with S, which makes us create a new property
  // The final result = { J: ['John', 'Jacob', 'Jingleheimer'], S: ['Schmidt'] }
   acc[next.charAt(0)] = [].concat(acc[next.charAt(0)] || [], next);
   return acc;
}, {});

// the above written is es6+
const es6PlusGroup =
  myList.reduce((acc, next) => ({...acc, [next.charAt(0)]: [].concat(acc[next.charAt(0)] || [], next)}), {});