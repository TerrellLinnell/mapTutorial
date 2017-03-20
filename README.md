# Learning about the `map()` method
* `map()` creates a new array with the results of calling a function for every array element.
* `map()` calls the provided function once for each element in an array, in order.
* `map()` does not change the original array.

## Step 1: setting up the local directory
* create a new directory titled mapMethodTutorial with the command `mkdir mapMethodTutorial`
* cd into that directory `cd mapMethodTutorial`
* add a file main.js  using the command `touch main.js`

## Step 2: setting up the project with github
* go to git hub and create a new repository
* at the top there is a url copy that url
* in your console within your mapMethodTutorial directory type `git init`
* type `git remote add origin (paste the url here)`
* type `git remote -v` to check if the remote belongs to you
* type `git status` to see untracked files
* type `git add -A` to track the untracked files
* type `git commit -m "(a commit message goes in here)"` this message will usually just be first commit
* type `git push origin master` this will push your code up to github

## Step 3: using the map function
* create an array of numbers`var numbers = [4, 9, 16, 25, 36, 49, 64]`
* create a variable `squareRoot` that maps the function and returns the square root of the numbers in the numbers array
  `var squareRoot = numbers.map(Math.sqrt);`,  `Math.sqrt` is a predefined function in javascript that finds the square root of a number
* log the result to the console `console.log(squareRoot);`
* to run your file type `node main.js`
* commit this step to github using `git status`, `git add -A`, `git commit -m "(commit message)"`, and `git push origin master`

## Step 4: more in depth mapping
With the `map()` method you can also pass in other functions as its parameter
* create a new array of objects that are people
```
var people = [
    {firstName: 'Bill', lastName: 'Hadley', membership: 'Gold'},
    {firstName: 'George', lastName: 'Stevenson', membership: 'Silver'},
  ];
```
  create a few more people using this template
* create a function that will change all memberships to gold
```
function ChangeSilverToGold () {
  people.map(function (item) {
      item.membership ='Gold';
      console.log('First Name: ' + item.firstName + ', ' + 'Membership: ' + item.membership);
  });
};
```

* do not forget to call the function at the bottom of your file `ChangeSilverToGold()`
* run this in your console to see the result, all the memberships should now be gold

* you can either use a callback function in map or use an anonymous function, in the example above
  we used an anonymous function as the map parameter but we could do this instead...
```
function mapCallback () {
    return some code for the map function to add to each item in the array;
}

function addSomething () {
  array.map(mapCallback)
};
  ```
* commit this step to github
* that is the basics of the map function, you can add something to each item in an array while creating a new array of those new items,
  I hope this helped, best of luck to you!!!😁😁😁😁😁😁😁😁
