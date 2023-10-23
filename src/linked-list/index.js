/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-13 10:07:39
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-22 14:13:06
 * @FilePath: \Algorithm\linked-list\index.js
 * @Description: 线性数据结构遍历逆向的练习
 */

// 生成链表节点
function node(value) {
  this.value = value
  this.next = null
}

// 生成5个节点
var node1 = new node(1)
var node2 = new node(2)
var node3 = new node(3)
var node4 = new node(4)
var node5 = new node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null

// 链表递归循环
function foreachNode(root) {
  if (root === null) return
  console.log(root.value)
  foreachNode(root.next)
}

// 链表遍历循环
// function foreachNode(root){
//   let temp = root
//   while(true){
//     if(temp !== null){
//       console.log(temp.value);
//       temp = temp.next
//     }else{
//       break;
//     }
//   }
// }

//  链表逆序
function reversion(root) {
  if (root.next.next === null) {
    root.next.next = root
    return root.next
  } else {
    reversion(root.next)
    root.next.next = root
    root.next = null
  }
}

reversion(node1)
foreachNode(node5)