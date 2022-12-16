// m sol
function solution(nums) {
    let count = [...new Set(nums)].length
    return count>nums.length/2 ? nums.length/2 : count
}