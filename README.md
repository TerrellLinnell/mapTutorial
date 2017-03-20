# Learning about the `map()` method
* `map()` creates a new array with the results of calling a function for every array element.
* `map()` calls the provided function once for each element in an array, in order.
* `map()` does not change the original array.

## step 1: setting up the local directory
* create a new directory titled mapMethodTutorial with the command `mkdir mapMethodTutorial`
* cd into that directory `cd mapMethodTutorial`
* add a file main.js  using the command `touch main.js`

## step 2: setting up the project with github
* go to git hub and create a new repository
* at the top there is a url copy that url
* in your console within your mapMethodTutorial directory type `git init`
* type `git remote add origin (paste the url here)`
* type `git remote -v` to check if the remote belongs to you
* type `git status` to see untracked files
* type `git add -A` to track the untracked files
* type `git commit -m "(a commit message goes in here)"` this message will usually just be first commit
* type `git push origin master` this will push your code up to github

## step 3: using the map function
* create an array of numbers`var numbers = [4, 9, 16, 25, 36, 49, 64]`
* create a variable `squareRoot` that maps the function and returns the square root of the numbers in the numbers array
  `var squareRoot = numbers.map(Math.sqrt);`,  `Math.sqrt` is a predefined function in javascript that finds the square root of a number
* log the result to the console `console.log(squareRoot);`
* commit this step to github using `git status`, `git add -A`, `git commit -m "(commit message)"`, and `git push origin master`

##step 4: more in depth mapping
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
