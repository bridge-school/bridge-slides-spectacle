const myList = ['John', 'Jane', 'Joe', 'Sara'];

// In this example, note the initial value is an object!
// Let's trace the values through each iteration of this reduce:
//  First: acc = {}, next = 'John'; returns { J: ['John'] }
//  Second: acc = { J: ['John'] }, next = 'Jane'; 
//         returns { J: ['John', 'Jane'] }
//  Third: acc = { J: ['John', 'Jane'] }, next = 'Joe'; 
//         returns { J: ['John', 'Jane', 'Joe'] }
//  Forth: acc = { J: ['John', 'Jane', 'Joe'] }, next = 'Sara'; 
//         returns { J: ['John', 'Jane', 'Joe'], S: ['Sara'] }
//  Final value: { J: ['John', 'Jane', 'Joe'], S: ['Sara'] }
const namesGroupedByFirstLetter = myList.reduce(function(acc, next) {
   const firstLetter = next.charAt(0);
   const sameLetterNamesArray = acc[firstLetter] || []; 
   acc[firstLetter] = [].concat(sameLetterNamesArray, next); 
   return acc;
}, {});