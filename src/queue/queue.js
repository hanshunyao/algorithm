/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-26 16:25:26
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-26 16:37:40
 * @FilePath: \algorithm\src\stack\stack.js
 * @Description: js代码实现队列先入先出原理
 */
function queue() {
  this.value = []
  this.push = function (val) {
    this.value.push(val)
  }
  this.pop = function () {
    this.value.shift()
  }
}

var arr = new queue()

arr.push(1)
console.log(arr.value)
arr.push(2)
console.log(arr.value)
arr.push(3)
console.log(arr.value)
arr.pop()
console.log(arr.value)
arr.pop()
console.log(arr.value)
arr.pop()
console.log(arr.value)
