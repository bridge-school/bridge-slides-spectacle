const sammyDavisSr = {
  firstName: 'Sammy',
  lastName: 'Davis',
  talents: ['Dancing']
};

sammyDavisSr.talents = ['Singing', 'Dancing', 'Acting', 'Comedy'];

const sammyDavisJr = sammyDavisSr;

console.log(sammyDavisJr); //correctly has all 4 talents!
console.log(sammyDavisSr); //oh no, we updated his talents as well!