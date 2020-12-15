
/**
 * 
 * @param {*} arr 
 * 使用快慢指针，快指针每次加一，慢指针在值不为0时加一，等于0并且快指针不为0时交换数据，慢指针再加一
 * 时间复杂度O(n), 空间复杂度O(1)
 */
function moveZeroToLast(arr) {
    let index = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[index] !== 0) {
            index++;
        } else if (arr[i] !== 0) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            index ++;
        }
    }
}

const arr = [0, 1, 0, 3, 12]
moveZeroToLast(arr);
// console.log(arr);
