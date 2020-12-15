
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

function mergeSort2(arr) {
    if(arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    return merge2(mergeSort2(arr.slice(0, middle)), mergeSort2(arr.slice(middle)));
}


function merge2(a, b) {
    let result = [];
    while(a.length && b.length) {
        if(a[0] <= b[0]) {
            result.push(a.shift())
        } else {
            result.push(b.shift())
        }
    }

    if (a.length) {
        result.concat(a)
    }
    if (b.length) {
        result.concat(b);
    }
    return result;
}
