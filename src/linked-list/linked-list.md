 链表

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3471842e047b4765bd007c4b4bf4319c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=862&h=129&s=13732&e=png&b=fefefe)

### 特性

- 储存在物理空间上可以不是连续的
- 每存放一个值，都要多开销一个引用空间

<!---->

### 优点

1. 只要内存足够大，就能存的下。不用担心空间碎片的问题
1. 链表的添加和删除非常容易

### 缺点

1. 查询速度慢（值的查询某个位置）
1. 链表的每一个节点都需要创建一个指向next的引用，浪费一些空间

>Tips:
>
>1. 如果想传递一个链表必须传递链表的根节点
>1. 因为链表的每一个节点都只记录下个节点的引用，所以每一个节点都认为自己是根节点
>1. 提到链表一般指的是单链表，如果是双链表会标明双链表。双链表的应用场景比单链表少，它的功能单链表都能实现，并且双链表更消耗资源
>1. 当节点内数据越多的时候，next引用占用内存的占比就越少，多开销的内存影响就越少
>1. 链表如果要删除一个节点就是把这个节点的上个节点指向这个节点的下个节点，如下图所示。以1为根节点的链表中没有指向3了，允许3的客观上的存在但是已经与1为根节点的链表无关了，也就是通过改变了2次引用就实现了删除的操作，比数组的删除以及扩容更节省资源。
>![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d80df0b5aa4a4700af7be1365e659044~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=777&h=443&s=28379&e=png&b=ffffff)
>同理增加一个节点也是改变2次引用，如下图所示。
>![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29cd00cc5125481398e80702e65eb3aa~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=575&h=337&s=35889&e=png&b=ffffff)

### 声明

```js
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

// 更改节点指向
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null
```

### 链表的遍历

```js
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

// 更改节点指向
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
function foreachNode(root){
  let temp = root
  while(true){
    if(temp !== null){
      console.log(temp.value);
      temp = temp.next
    }else{
      break;
    }
  }
}
```

### 链表的逆序

```js
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

// 更改节点指向
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null

// 链表逆序
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
```
