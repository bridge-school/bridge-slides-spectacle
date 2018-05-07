const myList = ['John', 'Jane', 'Joe', 'Sara'];

// The previous slide written in es6
const es6PlusGroup =
  myList.reduce((acc, next) => ({...acc, [next.charAt(0)]: [].concat(acc[next.charAt(0)] || [], next)}), {});