
/**
 * 二叉树
 */
var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}

// 
/**
 * 先序遍历
 * 递归实现
 * 先遍历根节点，再遍历左节点，最后遍历右节点
 */
// var preListRec = [];// 存放值的数组
// var preOrderRec = function(node) {
//     if (node) {
//         preListRec.push(node.value);
//         preOrderRec(node.left);
//         preOrderRec(node.right);
//     }
// }
// preOrderRec(tree);
// console.log(preListRec);

/**
 * 先序遍历
 * 非递归方式
 * 用数组模拟一个栈stack, 先把右节点入栈，左节点入栈，然后再出栈
 */


// var preListRec = [];// 存放值的数组
// var preOrderRec = function(node) {
//     var stack = [node];
//     while(stack.length !== 0) {
//         node = stack.pop();
//         preListRec.push(node.value);
//         if (node.right) {
//             stack.push(node.right);
//         }
//         if (node.left) {
//             stack.push(node.left);
//         }
//     }
// }
// preOrderRec(tree);
// console.log(preListRec);

/**
 * 中序遍历
 * 递归实现
 */
// var preListRec = [];// 存放值的数组
// var preOrderRec = function(node) {
//     if (node) {
//         preOrderRec(node.left);
//         preListRec.push(node.value);
//         preOrderRec(node.right);
//     }
// }
// preOrderRec(tree);
// console.log(preListRec);

/**
 * 中序遍历
 * 非递归实现
 * 实现思路是将当前节点压入栈，然后将做节点设为当前节点，如果当前节点为空，则取双亲节点，
 * 将值设为保存进数组，将右节点设置为当前节点，进行循环。
 */
// var preListRec = [];// 存放值的数组
// var preOrderRec = function(node) {
//     if (node) {
//         var stack = [];
//         while(stack.length !== 0 || node) {
//             if (node) {
//                 stack.push(node);
//                 node = node.left;
//             } else {
//                 node = stack.pop();
//                 preListRec.push(node.value);
//                 node = node.right;
//             }
//         }
//     }
// }
// preOrderRec(tree);
// console.log(preListRec);


/**
 * 后序遍历
 * 递归实现
 */
// var preListRec = [];// 存放值的数组
// var preOrderRec = function(node) {
//     if (node) {
//         preOrderRec(node.left);
//         preOrderRec(node.right);
//         preListRec.push(node.value);
//     }
// }
// preOrderRec(tree);
// console.log(preListRec);

/**
 * 后序遍历
 * 非递归实现
 * 
 * 使用一个 temp 作为临时变量来记录上一次出栈和入栈的节点。
 * 思路是先把根节点和左子树入栈，再出栈，把右子树入栈，再出栈，最后输出根节点。
 */
// var preListRec = [];// 存放值的数组
// var preOrderRec = function(node) {
//     if (node) {
//         var stack = [node];
//         while (stack.length !== 0) {
//             var temp = stack[stack.length - 1];
//             if (temp.left && node !== temp.left && node !== temp.right) {
//                 stack.push(temp.left);
//             } else if (temp.right && node !== temp.right) {
//                 stack.push(temp.right);
//             } else {
//                 preListRec.push(stack.pop().value);
//                 node = temp;
//             }
//         }
//     }
// }
// preOrderRec(tree);
// console.log(preListRec);


/**
 * 广度优先遍历
 * 一层一层的遍历二叉树节点
 * 使用队列，先将跟节点放在队列中，如果存在子节点，则将子节点压入队列，如果存在右节点，则将右节点压入队列，依次出队列
 */

 var preListRec = [];// 存放值的数组
var preOrderRec = function(node) {
    if (node) {
        var quene = [node];
        while ( quene.length !== 0 ) {
            preListRec.push(quene.value);
            if (node.left) quene.push(node.left);
            if (node.right) quene.push(node.right);
        }
    }
}
preOrderRec(tree);
console.log(preListRec);

