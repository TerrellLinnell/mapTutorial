var numbers = [4, 9, 16, 25, 36, 49, 64]

var sroot = numbers.map(Math.sqrt);

console.log(sroot);


var people = [
  {firstName: 'Bill', lastName:'Hadley', membership: 'Gold'},
  {firstName: 'George', lastName:'Stevenson', membership: 'Silver'},
  {firstName: 'Cheyenne', lastName:'Bickerson', membership: 'N/A'},
  {firstName: 'Alissa', lastName:'Benson', membership: 'Bronze'},
  {firstName: 'Cole', lastName:'Price', membership: 'Gold'},
];


function ChangeAllToGold () {
  var newPeople = people.map(function (item) {
      return (
        {
          firstName: item.firstName,
          lastName: item.lastName,
          membership: 'Gold'
        }
      )
  });
  return newPeople;
};

console.log(ChangeAllToGold());
