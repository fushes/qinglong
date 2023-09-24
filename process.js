/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
var reduce = function(nums, fn, init) {
    let count = 0;
    if(!nums.length){
        return init;
    }
    for(let i in nums){
        if(i == 0){
            count = fn(init,nums[i]);
            continue;
        }
        console.log(count,i)
        count = fn(count,nums[i]);
        
    }
    return count;
};
console.log(reduce(nums,fn,init));