// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([1,2,3,4], 3));  //index:0,1


//Another solution using hash map
function twoSumOptimized(nums, target) {
    let numMap = {};  // This object will store the numbers and their indices.

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        // Check if the complement exists in the map
        if (complement in numMap) {
            return [numMap[complement], i];
        }

        // Store the index of each element in the map
        numMap[nums[i]] = i;
    }
}
console.log( twoSumOptimized([1,2,3,4], 3));  //index:0,1