function maxHead(arr, size, index) {
    let iMax;
    let iLeft;
    let iRight;

    do {
        iMax = index;
        iLeft = index * 2 + 1;
        iRight = (index + 1) * 2;
        if (iLeft < size && arr[index] < arr[iLeft]) {
            iMax = iLeft;
        }
        if (iRight < size && arr[iMax] < arr[iRight]) {
            iMax = iRight;
        }
        if (iMax !== index) {
            swap(arr, index, iMax);
            // 设置index为子节点的index
            index = iMax;
            iMax = undefined;
        }
        // 判断是否需要循环子节点
    } while (iMax !== index);
}

function swap(arr, index, imax) {
    const tmp = arr[index];
    arr[index] = arr[imax];
    arr[imax] = tmp;
}


function build(arr, size) {
    let iParent = Math.floor((size - 1) / 2);
    for (let i = iParent; i >= 0; i--) {
        maxHead(arr, size, i);
    }
}

function sort(data) {
    build(data, data.length);
    for (let i = data.length - 1; i > 0; i--) {
        swap(data, 0, i);
        maxHead(data, i, 0);
    }
}

const data = [2, 3, 5, 6, 7, 8, 31, 56, 67, 23, 100, 200, 300, 32, 78, 49];
sort(data);

function find(data) {
    const arr = data.slice(0, 10);
    sort(arr);
    for (let i = 10; i < data.length; i++) {
        if (data[i] < arr[0]) {
            arr[0] = data[i];
            maxHead(data, 10, 0);
        }
    }
    return arr;
}

console.log(find(data));