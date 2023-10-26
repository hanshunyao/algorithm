/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-17 19:57:09
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-24 21:38:16
 * @FilePath: \algorithm\src\array\select-sort.js
 * @Description: 选择排序
 */
let arr1 = [2, 3, 7, 5, 1, 8, 6, 9, 0, 4]
function compare(a, b) {
  if (a > b) return true
  else return false
}

function exchange(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

// 选择排序，内层循环，每一圈选出一个最大的，然后放在后面
function sort(arr) {
  if (arr === null) return;
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = 0
    for (let j = 0; j < arr.length - i; j++) {
      if (compare(arr[maxIndex], arr[j])) {
        maxIndex = j
      }
    }
    exchange(arr, maxIndex, arr.length - 1 - i)
  }
}

sort(arr1)
console.log(arr1)