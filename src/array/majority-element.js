/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-22 14:21:16
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-22 15:04:41
 * @FilePath: \algorithm\src\array\majority-element.js
 * @Description: 169 多数元素 MajorityElement
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 示例 1：
 * 输入：nums = [3,2,3]
 * 输出：3
 * 示例 2：
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 * 提示：
 * n == nums.length
 * 1 <= n <= 5 * 104
 * -109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @Description 排序法 先排序，如果存在多数的数组一定会是中间这个  
 *              时间复杂度：O(nlogn)，快排的时间复杂度
 *              空间复杂度：O(logn),排序需要logn的空间复杂度
 */
var majorityElement1 = function (nums) {
  var n = Math.floor(nums.length / 2)
  nums.sort((a, b) => a - b)
  return nums[n]
};

/**
 * @param {number[]} nums
 * @return {number}
 * @Description 哈希法，遍历数组把数字出现的次数存进map
 *              时间复杂度：O(n),n为nums数组的长度
 *              空间复杂度：O(n),哈希表需要的空间
 */
var majorityElement2 = function (nums) {
  var n = nums.length / 2
  var map = new Map

  for (num of nums) {
    if (map.has(num)) {
      let currtNum = map.get(num)
      map.set(num, currtNum + 1)
    } else {
      map.set(num, 1)
    }
    if (map.get(num) > n) return num
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 * @Description 摩尔投票法 出现就+1 不同就-1 当计数为0时就换 被投票数，最后剩下的就是最多数
 *              时间复杂度：O(n),n为nums数组的长度
 *              空间复杂度：O(1),只存储的一个常熟级别的空间
 */
var majorityElement3 = function (nums) {
  var count = 0
  var majority

  for (var i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i]
    }
    if (nums[i] === majority) {
      count++
    } else {
      count--
    }
  }

  return majority
};