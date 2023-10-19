<!--
 * @Author: hanshunyao hanshunyao_hansy@163.com
 * @Date: 2023-10-19 17:10:15
 * @LastEditors: hanshunyao hanshunyao_hansy@163.com
 * @LastEditTime: 2023-10-19 17:14:57
 * @FilePath: \algorithm\src\array\array.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 数据结构与算法定义

数据结构：可以容纳数据的结构被称为数据结构，是静态的

算法：用来对数据结构进行处理的方法，是动态的

# 线性数据结构（一维数据结构）

特点：线性的数据结构强调存储与顺序

应用：数组和链表
包括

## 1. 数组

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec61ff8653774936a40f9e094cc2f36a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=674&h=104&s=20710&e=png&b=fefefe)

### 特性

- 存储在物理空间上是连续的
- 底层长度是不可变的
- 数组的变量，指向了数组第一个元素的位置

<!---->

### 优点

1. 查询性能好，指定查询某个位置
1. 一般的语言都是内置数组的，可以直接用

### 缺点

1. 因为空间必须是连续的，所以如果数组比较大，当系统的空间碎片较多的时候，容易存不下
1. 因为数组的长度是固定的，所以数组的内容难以被添加和删除

>Tips:
>
>1. 如果数组 a = [1,2,3,4,5,6,7,8]；这里的a其实是指向了数组第一个元素的位置，而a[1],a[2],a[3] 中的方括号表示存储地址的偏移。这属于操作系统的小知识，通过偏移来寻数据的性能最好。
>2. 数组的长度是不可变的，是从底层逻辑出发的，平时的数组长度可以通过push或者其他的方式在更改是因为JavaScript的v8引擎进行的操作。当你使用的长度超过数组的长度时，js会自动帮你进行一个数组扩容的操作，这里的数组扩容操作并不是在原本的存储空间后增加1个位置或者增加你缺少个数的存储空间，而是如下图所示。在另一个存储空间划分出一块新的空间，这块空间的大小并不是你刚才所需要的大小而是更大，为了减少你的扩容次数。如下图，本来是8个空间的数组，扩容之后在另一个空间划分出16个空间位置来给你存储（16为举例，为了表示会划分出比你需要的空间更大的空间），划分之后会把之前的数组复制过去，会消耗额外性能（cup）。所以在初始化数组的时候，如果数组的长度会变化，最好在初始化时考虑一下数据的理论范围之后对数组的大小进行赋值，以便减少不必要的性能损耗。
>![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22e30b2f813846f4ac0e2e80b7dd8712~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=933&h=201&s=37636&e=png&b=fefefe)
以上部分解释的是数组增加也就是数组扩容，当数组减少（删除）其中的元素的时候，如下图所示。当删除掉一个元素4（数组第3位）的时候，后面的位置会依次往前移动一位，也造成了不小的性能损耗。所以数组也尽量不要进行删除操作。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91be7916ddcd48b4bb86e575374c0214~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=697&h=493&s=63567&e=png&b=fefefe)
>3. 如果空间足够但是无法存下数组，也就是系统的空间碎片太多的时候，会触发系统的碎片整理，也是十分的消耗性能

### 声明

```js
var arr1 = [1,2,3,4,5]
var arr2 = new Array(5)
var arr3 = new Array(1,2,3,4,5)
```

### 数组的遍历

```js
var arr1 = [1, 2, 3, 4, 5]
// for遍历数组
for (var i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}
// foreach
arr1.forEach(ele => {
  console.log(ele)
});
```

### 数组的逆序

```js
var arr1 = [1,2,3,4,5]
arr1.reverse()
```
