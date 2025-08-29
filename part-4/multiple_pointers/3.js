//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    const newNums = nums.sort((a, b) => a - b)
    let left = 0;
    let right = newNums.length - 1
    let pair;

    while(left < right) {
      const sum = newNums[left]+ newNums[right]
      if(sum === target) {
        pair = [newNums[left], newNums[right]]
        break
      } else if (sum > target) {
        right --
      } else {
        left ++
      }
    }
    if (pair.length) {
        return [nums.indexOf(pair[0]), nums.indexOf(pair[1])];
    }
    return;
    
};

console.log(twoSum([2,7,11,15], 9));

//Wrong solution when I cover hash table I'll come back to this.