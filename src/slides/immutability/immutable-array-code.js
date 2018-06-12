const myFriendsLastYear = ['Elliot', 'Mustafa', 'Rehana', 'Sarah'];

myFriendsLastYear.push('Yihua');
const myFriendsThisYear = myFriendsLastYear;

console.log(myFriendsThisYear); // correctly shows all 5 of my current friends, including Yihua
console.log(myFriendsLastYear); // unfortunately ALSO includes Yihua, we mutated the original array using push
