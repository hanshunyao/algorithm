/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-24 21:50:17
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-24 23:07:45
 * @FilePath: \algorithm\src\array\quick-sort.js
 * @Description: 快速排序
 */
let arr1 = [2, 3, 7, 5, 1, 8, 6, 9, 0, 4]

// 简单实现
function easyQuickSort(arr) {
  if (arr === null || arr.length === 0) return [];
  // 选队长
  let leader = arr[0]
  // 小的站左边，大的站右边
  let left = []
  let right = []
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < leader) left.push(arr[i]);
    else right.push(arr[i]);
  }
  left = quickSort(left)
  right = quickSort(right)
  left.push(leader)
  return left.concat(right)
}

// console.log(easyQuickSort(arr1))

// 标准实现
function compare(a, b) {
  if (a > b) return true
  else return false
}
function exchange(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function sort(arr, begin, end) {
  if (arr === null || arr.length === 0 || begin >= end - 1) return
  let left = begin
  let right = end
  do {
    do left++; while (left < right && compare(arr[begin], arr[left]));
    do right--; while (left < right && compare(arr[right], arr[begin]));
    if (left < right) exchange(arr, left, right)
  } while (left < right);
  var changePoint = left === right ? right - 1 : right
  exchange(arr, begin, changePoint)
  sort(arr, begin, changePoint)
  sort(arr, changePoint + 1, end)
}
// 入口
function quickSort(arr) {
  sort(arr, 0, arr.length)
}
quickSort(arr1)
console.log(arr1)