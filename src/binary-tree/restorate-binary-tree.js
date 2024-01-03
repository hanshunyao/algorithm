/*
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2024-01-03 16:11:00
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2024-01-03 16:49:09
 * @FilePath: \algorithm\src\binary-tree\restorate-binary-tree.js
 * @Description: 根据二叉树的 前序 中序 后序的 两两组合 还原二叉树
 */

const qian = ["a", "c", "f", "g", "b", "d", "e"]
const zhong = ["f", "c", "g", "a", "d", "b", "e"]
const hou = ["f", "g", "c", "d", "e", "b", "a"]

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// 根据 前序中序 还原二叉树
function f1(qian, zhong) {
  if (qian === null || zhong === null || qian.length === 0 || zhong.length === 0 || qian.length !== zhong.length) return null; // 特殊判断
  const root = new Node(qian[0]); // 找到树的根节点
  const index = zhong.indexOf(root.value) // 找到树的根节点在中序遍历的位置
  const qianLeft = qian.slice(1, index + 1) // 用上面的位置，在前序遍历中找到 左子树
  const qianRight = qian.slice(index + 1, qian.length) // 用上面的位置，在前序遍历中找到 右子树
  const zhongLeft = zhong.slice(0, index)  // 用上面的位置，在中序遍历中找到 左子树
  const zhongRight = zhong.slice(index + 1, zhong.length)// 用上面的位置，在中序遍历中找到 右子树
  root.left = f1(qianLeft, zhongLeft) // 递归，判断左子树中是否还有子树
  root.right = f1(qianRight, zhongRight)// 递归，判断右子树中是否还有子树
  return root
}

// 根据 中序后序 还原二叉树
function f2(zhong, hou) {
  if (hou === null || zhong === null || hou.length === 0 || zhong.length === 0 || hou.length !== zhong.length) return null; // 特殊判断
  const root = new Node(hou[hou.length - 1])
  const index = zhong.indexOf(root.value)
  const zhongLeft = zhong.slice(0, index)
  const zhongRight = zhong.slice(index + 1, zhong.length)
  const houLeft = hou.slice(0, index)
  const houRight = hou.slice(index, hou.length - 1)
  root.left = f2(zhongLeft, houLeft)
  root.right = f2(zhongRight, houRight)
  return root
}


const root1 = f1(qian, zhong)
const root2 = f2(zhong, hou)
console.log(root1, root2)