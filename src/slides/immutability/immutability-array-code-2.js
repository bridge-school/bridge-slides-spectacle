const myFriendsLastYear = ['Elliot', 'Mustafa', 'Rehana', 'Sarah'];

const myFriendsThisYear = myFriendsLastYear.concat('Yihua');
// the below works exactly the same!
// const myFriendsThisYear = [...myFriendsLastYear, 'Yihua'];


console.log(myFriendsThisYear); // correctly shows all 5 of my current friends, including Yihua
console.log(myFriendsLastYear); // this time, using concat or array spread, we don't mutate last year's friends!