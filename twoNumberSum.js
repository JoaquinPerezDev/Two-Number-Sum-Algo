function twoNumberSum(array, targetSum) {
  // O(n) time | O(n) space complexity

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

//2nd variation: Nested loops. With this variation, the double loop checks every first and second value within the array against one another. Then, if the first and second value equal the targetsum AND the first and second value are not the same value, we return the array with the first and second value. Otherwise, we return an empty array.

// O(n^2) time | O(1) space complexity

// function twoNumberSum(array, targetSum) {

//   for (i = 0; i < array.length; i++) {
//       let firstNum = array[i];
//     for(j = i + 1; j < array.length; j++) {
//       let secondNum = array[j];
//       if(firstNum + secondNum == targetSum && i != j) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// }

// 3rd variation: Using two pointers. The idea with pointers is you use two pointers on a sorted array. A left pointer that points to the index 0 value of the array and a right pointer that points to the last value in the array(array.length - 1). You then set up a conditional to check if the currentSum of the left and right values sum the target value, you return the array with the left and right values. If not, you check if currentSum is lower than targetSum, the left pointer moves right. Finally, if the currentSum is higher than targetSum, the right pointer moves left. This is because, since the array is sorted, by moving the left pointer right, the value that the left pointer is on increases, then running the conditional again to check if currentSum is equal to targetSum. Same logic applies to the right pointer going left; this moves the right pointer to a value lower than the previous one. This process loops until the values that the left and right pointers are pointing to equal the targetSum.

// O(nlog(n)) time | O(1) space

// function twoNumberSum(array, targetSum) {
//   array.sort((a,b) => a - b);
//   let left = 0;
//   let right = array.length - 1;
//   while(left < right) {
//     currentSum = array[left] + array[right];
//     if(currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if(currentSum < targetSum) {
//       left++;
//     } else if(currentSum > targetSum) {
//       right--;
//     }
//   }
//   return [];
// }
