const sammyDavisSr = {
  firstName: 'Sammy',
  lastName: 'Davis',
  talents: ['Dancing']
};

const sammyDavisJr = sammyDavisSr;

sammyDavisJr.talents = ['Singing', 'Dancing', 'Acting', 'Comedy'];

console.log(sammyDavisJr); //correctly has all 4 talents!
console.log(sammyDavisSr); //oh no, we updated his talents as well!