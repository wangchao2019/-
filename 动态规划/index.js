/*�ȼ۶���ŵ���ƶԵ�����
 ����һ����һЩ����ŵ������ɵ��б�?dominoes��

�������ĳһ�Ŷ���ŵ���ƿ���ͨ����ת 0?�Ȼ� 180 �ȵõ���һ�Ŷ���ŵ���ƣ����Ǿ���Ϊ���������ǵȼ۵ġ�

��ʽ�ϣ�dominoes[i] = [a, b]?��?dominoes[j] = [c, d]?�ȼ۵�ǰ����?a==c?��?b==d������?a==d ��?b==c��

��?0 <= i < j < dominoes.length?��ǰ���£��ҳ�����?dominoes[i] ��?dominoes[j]?�ȼ۵Ĺ��ƶ� (i, j) ��������
���룺dominoes = [[1,2],[2,1],[3,4],[5,6]]
�����1
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
����һ���������͵�����?nums�����дһ���ܹ��������� ������������ �ķ�����

������������������ �������� �ģ����������������������Ԫ����ӵĺ͵����Ҳ�����Ԫ����ӵĺ͡�

������鲻����������������ô����Ӧ�÷��� -1����������ж��������������ô����Ӧ�÷��������ߵ���һ����

ʾ�� 1��

���룺
nums = [1, 7, 3, 6, 5, 6]
�����3
���ͣ�
���� 3 (nums[3] = 6) �������֮�� (1 + 7 + 3 = 11)�����Ҳ���֮�� (5 + 6 = 11) ��ȡ�
ͬʱ, 3 Ҳ�ǵ�һ������Ҫ������������� */

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

/*������������¥�ݡ���Ҫ n?������ܵ���¥����

ÿ��������� 1 �� 2 ��̨�ס����ж����ֲ�ͬ�ķ�����������¥���أ�

ע�⣺���� n ��һ����������

ʾ�� 1��

���룺 2
����� 2
���ͣ� �����ַ�����������¥����
1.  1 �� + 1 ��
2.  2 ��
ʾ�� 2��

���룺 3
����� 3
���ͣ� �����ַ�����������¥����
1.  1 �� + 1 �� + 1 ��
2.  1 �� + 2 ��
3.  2 �� + 1 ��*/

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