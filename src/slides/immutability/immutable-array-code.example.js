const myFriendsLastYear = ['Elliot', 'Mustafa', 'Rehana', 'Sarah'];

const myFriendsThisYear = myFriendsLastYear;
myFriendsThisYear.push('Yihua');

console.log(myFriendsThisYear); // correctly shows all 5 of my current friends, including Yihua
console.log(myFriendsLastYear); // unfortunately ALSO includes Yihua, we mutated the original array using push
