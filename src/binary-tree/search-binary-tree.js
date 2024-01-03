function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

var a = new Node("a")
var b = new Node("b")
var c = new Node("c")
var d = new Node("d")
var e = new Node("e")
var f = new Node("f")
var g = new Node("g")

a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

// 深度优先搜索 DFS Deep First Search(对于二叉树来说，深度优先搜索和前序遍历的顺序是一样的)
function deepSearch(root, target) {
  if (root === null) return false;
  if (root.value === target) return true;
  const left = deepSearch(root.left, target)
  const right = deepSearch(root.right, target)
  return left || right
}

console.log(deepSearch(a, "e"))

// 广度优先搜索 BFS Breadth First Search
function breadthSearch(rootList, target) {
  if (rootList === null || rootList.length === 0) return false;
  const childList = []
  for (let i = 0; i < rootList.length; i++) {
    if (rootList[i] !== null && rootList[i].value === target) {
      return true
    } else {
      childList.push(rootList[i].left)
      childList.push(rootList[i].right)
    }
  }
  return breadthSearch(childList, target)
}

console.log(breadthSearch([a], "e"))