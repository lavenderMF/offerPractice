// 1.在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。 
function judgeInt(array,intNum){
    var arrLength = array.length-1, i, j;
    for(i=arrLength,j=0;i>=0 && j<array[i].length;){
        if(array[i][j] == intNum){
            return true;
        }else if(intNum > array[i][j]){
            j++;
            continue;
        }else if(intNum < array[i][j]){
            i--;
            continue;
        }
    }
    return false;
}
var arr = [[1,2,3],[4,5,6],[7,8,9]],num = 3;
judgeInt(arr,num);

// 2.请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。 
function replaceSpace(str){
    return str.replace(/ /g, '%20');
}
replaceSpace('We Are Happy');

// 3.输入一个链表，从尾到头打印链表每个节点的值。
function printListFromTailToHead(head){
    if(!head){
        return 0; 
    } else {
        var arr = new Array();
        var curr = head;
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr.reverse();
    }
}

//4.输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
function tree(x){
    this.val = x;
    this.left = null;
    this.right = null;
}

function binaryTree(pre, mid){
    if(pre.length == 0 || mid.length == 0){
        return null;
    }else{
        var index = mid.indexOf(pre[0]);
        var treeList = new tree(pre[0]);
        treeList.left = binaryTree(pre.slice(1,index+1),mid.slice(0, index + 1));
        treeList.right = binaryTree(pre.slice(index+1),mid.slice(index+1));
    }
    return treeList;
}
var pre = [1,2,4,7,3,5,6,8];
var mid = [4,7,2,1,5,3,8,6];
binaryTree(pre,mid);

// 5.用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。 

var stack1 = [],stack2 = [];

function push(node){
    return stack1.push(node);
}

function pop(){
    var temp = stack1.pop();
    while(temp){
        stack2.push(temp);
        temp = stack1.pop();
    }
    var result = stack2.pop();
    var temp = stack2.pop();
    while(temp){
        stack1.push(temp);
        temp = stack2.pop();
    }
    return result;
}

//6. 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 
//例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。 
function minNumber(rotateArray){
    var len = rotateArray.length;
    if(len === 0){
        return 0;
    }
    return Math.min.apply(null,rotateArray);
}

//7. 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。n<=39
function feinpmaqi(num){
    var temp,pre1=1,pre2=1,i;
    if(num < 3){
        result = 1;
    }else{
        for(i=2;i<=num;i++){
            temp = pre2;
            pre2 = pre1 + pre2;
            pre1 = temp;
        }
    }
    return pre1;
}
feinpmaqi(5);

// 8.一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。 
function jump(num){
    if(num < 1){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    if(num === 2){
        return 2;
    }
    var temp = 0, a = 1, b = 2;
    for(var i = 3; i <= num; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}

// 9.一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
// f(n) = f(n-1) + f(n-2) + f(n-3) +...+f(1);
// f(n-1) = f(n-2) + f(n-3) +...+f(1);
// 两式相减得f(n) = 2f(n-1) 也就是2^(n-1)
function jump2(num){
    return Math.pow(2,num-1);
}

// 10.我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？ 
function rectCover(num){
    var a = 1,b = 2,temp;
    if(num <= 0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    if(num === 2){
        return 2;
    }
    for(var i = 3; i <= num; i++){
        temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

// 11.输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function numIndexOf1(num){
    if(num < 0){
        // num = num.toString(2) + 1;
    }
    var arr = n.toString(2).split('');
    return arr.reduce(function(a,b){
        return b === "1" ? a + 1 : a;
    },0);
}

// 12.给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
function Power(base, exponent){
    return Math.pow(base, exponent);
}

// 13.输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，
//并保证奇数和奇数，偶数和偶数之间的相对位置不变。
function reOrderArray(arr){
    var first = new Array,second = new Array;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 > 0){
            first.push(arr[i]);
        }else if(arr[i] % 2 == 0){
            second.push(arr[i]);
        }
    }
    return first.concat(second);
}

// 14.输入一个链表，输出该链表中倒数第k个结点。
function nodeList(val){
    this.val = val;
    this.next = null;
}

function findk(head, k){
    if(!head || k <= 0 ){
        return null;
    }
    var i = head,j = head;
    while(--k){
        j = j.next;
        if(!j){
            return null;
        }
    }
    while(j.next){
        i = i.next;
        j = j.next;
    }
    j = null;
    return n;
}

// 15.输入一个链表，反转链表后，输出链表的所有元素。
function nodeList(val){
    this.val = val;
    this.next = null;
}

function reverse(pHead){
    var newHead, temp;
    if(!pHead){
        return null;
    }
    if(pHead.next === null){
        return pHead
    }else{
        newHead = reverse(pHead.next);
    }

}

function con(num){
    if(num<0){

    }else{
        con(num-1)
    }
    console.log(1);
}
con(10)

