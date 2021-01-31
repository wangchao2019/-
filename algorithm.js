// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
var groupAnagrams = function (strs) {
    let obj = {}
    let arry = []
    strs.forEach((item) => {
        if (obj.hasOwnProperty(item.split('').sort().join(''))) {
            obj[item.split('').sort().join('')].push(item)
        } else {
            obj[item.split('').sort().join('')] = []
            obj[item.split('').sort().join('')].push(item)
        }
    })
    let keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var temp = obj[keys[i]];
        arry.push(temp)
    }
    return arry
};
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
var maxSubArray = function (nums) {
    let ans = nums[0]
    let sum = 0

    for (let item of nums) {
        if (sum > 0) {
            sum = sum + item
        } else {
            sum = item
            //如果sum不是大于0的，则与其相加没有增益效果，直接放弃，将当前的item赋值给sum
        }
        //这里的ans代表的是之前的最大和，拿之前的最大和跟现在的sum相比就得到新的最大和
        ans = Math.max(ans, sum)
    }
    return ans

};
/*给定一个非负整数数组，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最
判断你是否能够到达最后一个位置。[2,3,1,1,4]*/
var canJump = function (nums) {
    let max = 0; // 能够走到的数组下标

    for (let i = 0; i < nums.length; i++) {
        if (max < i) return false; // 当前这一步都走不到，后面更走不到了
        max = Math.max(nums[i] + i, max);
    }
    return max >= nums.length - 1
};

/*
给定一个仅包含大小写字母和空格?' '?的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

如果不存在最后一个单词，请返回 0?。*/

var lengthOfLastWord = function (s) {
    let end = s.length - 1;
    while (end >= 0 && s[end] === ' ') end--;
    if (end < 0) return 0;
    let start = end;
    while (start >= 0 && s[start] !== ' ') start--;
    return end - start;
};
//定一个整数数组 nums?和一个目标值 target，请你在该数组中找出和为目标值的那?两个?整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    const prevNums = {};                         // 存放出现过的数字，和对应的索引
    for (let i = 0; i < nums.length; i++) {      // 遍历每一项
        const curNum = nums[i];                    // 当前项
        const targetNum = target - curNum;         // 希望从过去的数字中找到的呼应项
        const targetNumIndex = prevNums[targetNum];// 在prevNums中找targetNum的索引
        if (targetNumIndex !== undefined) {        // 如果能找到
            return [targetNumIndex, i];              // 直接返回targetNumIndex和当前的i
        }                                          // 如果找不到，说明之前没出现过targetNum
        prevNums[curNum] = i;                      // 往prevNums存当前curNum和对应的i
    }
}


// 寻找数组中最长的山脉
//我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：
//
// B.length >= 3
// 存在 0 < i?< B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// （注意：B 可以是 A 的任意子数组，包括整个数组 A。）
//
// 给出一个整数数组 A，返回最长 “山脉”?的长度。
//
// 如果不含有 “山脉”?则返回 0。
/**
 * @param {number[]} A
 * @return {number}
 */
const longestMountain = (A) => {
    // 1. 设置结果
    let result = 0;
    let resultArr = []

    // 2. 遍历数组 A
    for (let i = 0; i < A.length; i++) {
        let arr = []
        console.log(i)
        // 3. 起手判断，唯有 i+1 > i 的情况才进入
        if (A[i + 1] > A[i]) {
            // 3.1 设置起手长度为 1
            let length = 1;
            arr.push(A[i])
            arr.push(A[i])
            // 3.2 山峰查找，上坡
            while (A[i + 1] > A[i]) {
                arr.push(A[i + 1])
                i++;
                length++;
            }

            // 3.3 如果是递增数列，证明无效
            if (A[i + 1] === undefined || A[i + 1] === A[i]) {
                continue;
            }

            // 3.4 山峰查找，下坡
            while (A[i + 1] < A[i]) {
                arr.push(A[i + 1])
                i++;
                length++;
            }

            // 3.5 记得我们下坡终止是 i+1 < i
            // 假设有数组 1-4-7-3-2-5
            // 所以会到 2-5 的时候终止，需要回到 2 的位置
            console.log(i);
            i--;
            console.log(i);

            // 3.6 如果此时山峰长度大于 3 并且比当前 result 大
            if (length >= 3 && length > result) {
                result = length;
                resultArr = arr
            }
        }
    }
    return {
        length: result,
        arr: resultArr
    }
}
//动态规划
//给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回?-1。
//
// 你可以认为每种硬币的数量是无限的。

var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

//给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
//示例 1:
//
// 输入: [2,3,-2,4]
// 输出: 6
// 解释:子数组 [2,3] 有最大乘积 6。
// 示例 2:
//
// 输入: [-2,0,-1]
// 输出: 0
// 解释:结果不能为 2, 因为 [-2,-1] 不是子数组。
//     [-2,3,-4]输出:24
/**
 * @param {number[]} nums
 * @return {number}
 */
/*var maxProduct = function (nums) {
    let maxSum = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxSum) {
            maxSum = nums[i]
        }
        let j = i
        let temp=nums[j]
        while (j < nums.length-1) {
            temp=temp*nums[j+1]
            if (temp>maxSum){
                maxSum=temp
            }
            j++
        }
    }
    return maxSum


};*/
var maxProduct = (nums) => {
    let res = nums[0]
    let prevMin = nums[0]
    let prevMax = nums[0]
    let temp1 = 0, temp2 = 0
    for (let i = 1; i < nums.length; i++) {
        temp1 = prevMin * nums[i]
        temp2 = prevMax * nums[i]
        prevMin = Math.min(temp1, temp2, nums[i])
        prevMax = Math.max(temp1, temp2, nums[i])
        res = Math.max(prevMax, res)
    }
    return res
}
var maxProduct1 = function (nums) {
    return nums.reduce((p, n, t) => (
        t = [n, n * p[0], n * p[1]],
            p[0] = Math.max(...t),
            p[1] = Math.min(...t),
            p[2] = Math.max(p[2], p[0]),
            p
    ), [1, 1, -Infinity])[2]
};
/*峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组?nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设?nums[-1] = nums[n] = -∞。

示例 1:

输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
示例?2:

输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5
解释: 你的函数可以返回索引 1，其峰值元素为 2；
?    或者返回索引 5， 其峰值元素为 6。*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return i
        }
    }
    return nums.length - 1
};

