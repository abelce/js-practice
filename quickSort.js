/**
 * 快速排序
 * 
 * @param {快速排序} arr 
 * @param {*} begin 
 * @param {*} end 
 */

function QuickSort(arr, begin, end) {
    if (begin >= end) {
        return;
    }

     let l = begin;
     let r = end;

     let flag = arr[begin];

     while( l < r) {
         while(arr[r] >= flag && r > l) {
            r--;
         }

         while(arr[l] <= flag && l < r) {
            l++;
         }

         [arr[l], arr[r]] = [arr[r], arr[l]];
     }
     [arr[l], arr[begin]] = [arr[begin], arr[l]];
     QuickSort(arr, begin, l - 1);
     QuickSort(arr, l + 1, end);
}

var  a = [3, 6, 8, 2, 7,5];
QuickSort(a, 0, a.length - 1);
console.log(a);