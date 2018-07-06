const sammyDavisSr = {
  firstName: 'Sammy',
  lastName: 'Davis',
  talents: ['Dancing']
};


// THE FIRST empty object, {}, IS IMPORTANT, OBJECT ASSIGN UPDATES THE FIRST OBJECT ARGUMENT IT GETS
// giving it an empty object for the first argument creates a new 'reference' for updating, thus
// allowing for immutability - you no longer reference the old object!

// each object you pass into object assign gets merged in, right to left, into the final base object
// this means that things on the right overwrite things on the left
const sammyDavisJr = Object.assign({}, sammyDavisSr, {talents: ['Singing', 'Dancing', 'Acting', 'Comedy']});

// the same written with object spread
// const sammyDavisJr = {...sammyDavisSr, talents: ['Singing', 'Dancing', 'Acting', 'Comedy']};

console.log(sammyDavisJr); //correctly has all 4 talents!
console.log(sammyDavisSr); // left untouched!