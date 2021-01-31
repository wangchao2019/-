// ����һ���ַ������飬����ĸ��λ�������һ����ĸ��λ��ָ��ĸ��ͬ�������в�ͬ���ַ�����
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
// ����һ���������� nums ���ҵ�һ���������͵����������飨���������ٰ���һ��Ԫ�أ������������͡�
var maxSubArray = function (nums) {
    let ans = nums[0]
    let sum = 0

    for (let item of nums) {
        if (sum > 0) {
            sum = sum + item
        } else {
            sum = item
            //���sum���Ǵ���0�ģ����������û������Ч����ֱ�ӷ���������ǰ��item��ֵ��sum
        }
        //�����ans�������֮ǰ�����ͣ���֮ǰ�����͸����ڵ�sum��Ⱦ͵õ��µ�����
        ans = Math.max(ans, sum)
    }
    return ans

};
/*����һ���Ǹ��������飬�����λ������ĵ�һ��λ�á�
�����е�ÿ��Ԫ�ش������ڸ�λ�ÿ�����Ծ����
�ж����Ƿ��ܹ��������һ��λ�á�[2,3,1,1,4]*/
var canJump = function (nums) {
    let max = 0; // �ܹ��ߵ��������±�

    for (let i = 0; i < nums.length; i++) {
        if (max < i) return false; // ��ǰ��һ�����߲�����������߲�����
        max = Math.max(nums[i] + i, max);
    }
    return max >= nums.length - 1
};

/*
����һ����������Сд��ĸ�Ϳո�?' '?���ַ��� s�����������һ�����ʵĳ��ȡ�����ַ����������ҹ�����ʾ����ô���һ�����ʾ��������ֵĵ��ʡ�

������������һ�����ʣ��뷵�� 0?��*/

var lengthOfLastWord = function (s) {
    let end = s.length - 1;
    while (end >= 0 && s[end] === ' ') end--;
    if (end < 0) return 0;
    let start = end;
    while (start >= 0 && s[start] !== ' ') start--;
    return end - start;
};
//��һ���������� nums?��һ��Ŀ��ֵ target�������ڸ��������ҳ���ΪĿ��ֵ����?����?���������������ǵ������±ꡣ

// ����Լ���ÿ������ֻ���Ӧһ���𰸡����ǣ�������ͬһ��Ԫ�ز���ʹ�����顣
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    const prevNums = {};                         // ��ų��ֹ������֣��Ͷ�Ӧ������
    for (let i = 0; i < nums.length; i++) {      // ����ÿһ��
        const curNum = nums[i];                    // ��ǰ��
        const targetNum = target - curNum;         // ϣ���ӹ�ȥ���������ҵ��ĺ�Ӧ��
        const targetNumIndex = prevNums[targetNum];// ��prevNums����targetNum������
        if (targetNumIndex !== undefined) {        // ������ҵ�
            return [targetNumIndex, i];              // ֱ�ӷ���targetNumIndex�͵�ǰ��i
        }                                          // ����Ҳ�����˵��֮ǰû���ֹ�targetNum
        prevNums[curNum] = i;                      // ��prevNums�浱ǰcurNum�Ͷ�Ӧ��i
    }
}


// Ѱ�����������ɽ��
//���ǰ����� A �з����������Ե��������������� B ��Ϊ ��ɽ������
//
// B.length >= 3
// ���� 0 < i?< B.length - 1 ʹ�� B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// ��ע�⣺B ������ A �����������飬������������ A����
//
// ����һ���������� A������� ��ɽ����?�ĳ��ȡ�
//
// ��������� ��ɽ����?�򷵻� 0��
/**
 * @param {number[]} A
 * @return {number}
 */
const longestMountain = (A) => {
    // 1. ���ý��
    let result = 0;
    let resultArr = []

    // 2. �������� A
    for (let i = 0; i < A.length; i++) {
        let arr = []
        console.log(i)
        // 3. �����жϣ�Ψ�� i+1 > i ������Ž���
        if (A[i + 1] > A[i]) {
            // 3.1 �������ֳ���Ϊ 1
            let length = 1;
            arr.push(A[i])
            arr.push(A[i])
            // 3.2 ɽ����ң�����
            while (A[i + 1] > A[i]) {
                arr.push(A[i + 1])
                i++;
                length++;
            }

            // 3.3 ����ǵ������У�֤����Ч
            if (A[i + 1] === undefined || A[i + 1] === A[i]) {
                continue;
            }

            // 3.4 ɽ����ң�����
            while (A[i + 1] < A[i]) {
                arr.push(A[i + 1])
                i++;
                length++;
            }

            // 3.5 �ǵ�����������ֹ�� i+1 < i
            // ���������� 1-4-7-3-2-5
            // ���Իᵽ 2-5 ��ʱ����ֹ����Ҫ�ص� 2 ��λ��
            console.log(i);
            i--;
            console.log(i);

            // 3.6 �����ʱɽ�峤�ȴ��� 3 ���ұȵ�ǰ result ��
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
//��̬�滮
//������ͬ����Ӳ�� coins ��һ���ܽ�� amount����дһ��������������Դճ��ܽ����������ٵ�Ӳ�Ҹ��������û���κ�һ��Ӳ�����������ܽ�����?-1��
//
// �������Ϊÿ��Ӳ�ҵ����������޵ġ�

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

//����һ���������� nums �������ҳ������г˻��������������飨�������������ٰ���һ�����֣��������ظ�����������Ӧ�ĳ˻���
//ʾ�� 1:
//
// ����: [2,3,-2,4]
// ���: 6
// ����:������ [2,3] �����˻� 6��
// ʾ�� 2:
//
// ����: [-2,0,-1]
// ���: 0
// ����:�������Ϊ 2, ��Ϊ [-2,-1] ���������顣
//     [-2,3,-4]���:24
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
/*��ֵԪ����ָ��ֵ������������ֵ��Ԫ�ء�

����һ����������?nums������ nums[i] �� nums[i+1]���ҵ���ֵԪ�ز�������������

������ܰ��������ֵ������������£������κ�һ����ֵ����λ�ü��ɡ�

����Լ���?nums[-1] = nums[n] = -�ޡ�

ʾ�� 1:

����: nums = [1,2,3,1]
���: 2
����: 3 �Ƿ�ֵԪ�أ���ĺ���Ӧ�÷��������� 2��
ʾ��?2:

����: nums = [1,2,1,3,5,6,4]
���: 1 �� 5
����: ��ĺ������Է������� 1�����ֵԪ��Ϊ 2��
?    ���߷������� 5�� ���ֵԪ��Ϊ 6��*/
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

