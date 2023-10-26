/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-26 16:25:26
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-26 16:30:29
 * @FilePath: \algorithm\src\stack\stack.js
 * @Description: js代码实现栈先入后出原理
 */
var arr = []

function stack() {
  this.value = []
  this.push = function (val) {
    this.value.push(val)
  }
  this.pop = function () {
    this.value.pop()
  }
}

var arr = new stack()

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
