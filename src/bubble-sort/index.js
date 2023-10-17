/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-17 19:57:09
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-17 20:07:29
 * @FilePath: \algorithm\src\bubble-sort\index.js
 * @Description: 冒泡排序
 */
var arr1 = [2, 3, 7, 5, 1, 8, 6, 9, 0, 4]
function bubbleSort(arr) {
  if (arr === null) return;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
}
bubbleSort(arr1)
console.log(arr1);