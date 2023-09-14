function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    const firstNum = target - array[i];

    for(let a = i +1; a < array.length; a++) {
      if (array[a] === firstNum)
      return true;
    }
}
      return false;
}

/* 
  Write the Big O time complexity of your function here

First step is the iteration of the array, which is n iterations
then we have an iteration inside the for loop, which is n times n
Solution should be 0(n2 * n)
*/

/* 
  Step 1 is to create an array and iterate over it
  Step 2 is to compare numbers in the array to see if they add up to the number we chose outside of the array
  Step 3 is to return true if the numbers equal, false if there aren't two numbers that add up by the end of the iteration
*/

/*
  First you have the hasTargetSum function that takes an array and target as it's paramenters.
  Then you have a for loop to iterate through the array, starting at position 0. 
  The for loop comparies the first number to the rest of the numbers in the array and either finds a match...
  and returns true, or does not find anything that matches the target number and returns false.
  ...I used some help from the solution to write the solution code.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log(hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log(hasTargetSum([1, 2, 5], 4));

  //
  console.log("Expecting: true");
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log(hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
