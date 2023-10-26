/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-13 10:07:39
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-26 16:40:42
 * @FilePath: \Algorithm\linked-list\doubly-linked-list.js
 * @Description: 双向链表的生成
 */

function Node(value) {
  this.value = value;
  this.next = null;
  this.pre = null;
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)

node1.next = node2
node2.pre = node1
node2.next = node3
node3.pre = node2
node3.next = node4
node4.pre = node3
node4.next = node5
node5.pre = node4

// 双向链表优点，无论给出哪一个节点，都能对整个链表进行遍历
// 双向链表的缺点，多耗费一个引用空间，而且构建双向链表比较复杂