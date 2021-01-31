/*等价多米诺骨牌对的数量
 给你一个由一些多米诺骨牌组成的列表?dominoes。

如果其中某一张多米诺骨牌可以通过旋转 0?度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。

形式上，dominoes[i] = [a, b]?和?dominoes[j] = [c, d]?等价的前提是?a==c?且?b==d，或是?a==d 且?b==c。

在?0 <= i < j < dominoes.length?的前提下，找出满足?dominoes[i] 和?dominoes[j]?等价的骨牌对 (i, j) 的数量。
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1
 */
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    const num = new Array(100).fill(0);
    let ret = 0;
    for (const domino of dominoes) {
        const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
        ret += num[val];
        num[val]++;
    }
    return ret;
};

/* 
给定一个整数类型的数组?nums，请编写一个能够返回数组 “中心索引” 的方法。

我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

示例 1：

输入：
nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
同时, 3 也是第一个符合要求的中心索引。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0
    let total = nums.reduce((a, b) => a + b, 0)
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element + 2 * sum === total) {
            return index
        }
        sum += element
    }
    return -1
};

/*假设你正在爬楼梯。需要 n?阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const dp = []
    dp[1] = 1
    dp[2] = 2
    if (n <= 2) {
        return dp[n]
    }
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};