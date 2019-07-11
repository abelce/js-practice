
function mergeSort(arr) {
    var len = arr.length;

    if (len < 2) {
        return arr;
    }


    var middle = Math.floor(len / 2);
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

function merge(left, right) {

    var result = [];
    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    if (left.length) {
        result.concat(left);
    }
    if (right.length) {
        result.concat(right);
    }

    return result;
}