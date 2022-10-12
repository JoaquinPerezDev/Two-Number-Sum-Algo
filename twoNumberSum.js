function twoNumberSum(array, targetSum) {
  //given array & targetSum, return array of two numbers that = targetSum
  //if(two numbers in array = targetSum, return array of those two numbers)
  //if(no numbers in array = targetSum, return empty array)
  //targetSum must be summing two different intergers in the array
  //Array will have a max of one pair of numbers that = targetSum

  // A nested loop could work here but the time complexity would be inefficient.
  // A hash table can be used to store numbers already looped through.
  // The idea is to find the compliment(y) + number(x) that will equal targetSum.
  // The process for the loop will be to subtract each number(x) to the targetSum to get the compliment(y) and then check if that number is in the hash table. If it's not, then we add it to the has table.
  // If the compliment(y) IS in the hash table, we then return the compliment(y) and the number(x) and we're done.

  let seenNumbers = {};

  for (let num of array) {
    let compliment = targetSum - num;
    if (compliment in seenNumbers) {
      return [compliment, num];
    } else {
      seenNumbers[num] = true;
    }
  }
  return [];
}
