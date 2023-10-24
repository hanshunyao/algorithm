/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-17 19:57:09
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-24 21:20:16
 * @FilePath: \algorithm\src\bubble-sort\index.js
 * @Description: 冒泡排序
 */
//排序的本质： 排序不是比较大小，是比较和交换

var arr1 = [2, 3, 7, 5, 1, 8, 6, 9, 0, 4]

// 分方法
function compare(a, b) {//比较之后需要得出是否需要交换
  if (a > b) return true;
  else return false
}

function exchange(arr, a, b) {//将数组中ab位置里的指进行交换
  var temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function sort(arr) {
  if (arr === null) return;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        exchange(arr, j, j + 1)
      }
    }
  }
}

// 一体
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


// bubbleSort(arr1)
sort(arr1)
console.log(arr1);