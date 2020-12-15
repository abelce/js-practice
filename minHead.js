// function minHead(data, size, index) {
//     let iMin,
//         iLeft,
//         iRight;

//     do {
//         iMin = index;
//         iLeft = index * 2 + 1;
//         iRight = (index + 1) * 2;
//         // if (index === 0) {
//         //     debugger
//         // }
//         if (iLeft < size && data[index] > data[iLeft]) {
//             iMin = iLeft;
//         }
//         if (iRight < size && data[iMin] > data[iRight]) {
//             iMin = iRight;
//         }
//         if (iMin !== index) {
//             swap(data, index, iMin);
//             // 设置index为子节点的index
//             debugger
//             index = iMin;
//             iMin = undefined;
//         }
//         // 判断是否需要循环子节点
//     } while (iMin !== index);
// }

// function swap(data, i, j) {
//     const tmp = data[i];
//     data[i] = data[j];
//     data[j] = tmp;
// }


// function build(data, size) {
//     let iParent = Math.floor((size - 1) / 2);
//     for (let i = iParent; i >= 0; i--) {
//         minHead(data, size, i);
//     }
// }

// function sort(data) {
//     const arr = data.slice(0, 10);
//     build(arr, arr.length);
//     console.log(arr);
//     for (let i = 10; i < data.length; i++) {
//         if (arr[0] < data[i]) {
//             arr[0] = data[i];
//             minHead(arr, 10, 0);
//         }
//     }
//     console.log(arr);
// }

// const data = [100, 31, 56, 2, 3, 5, 6, 7, 8, 67, 23, 200, 300, 32, 78, 49];
// sort(data)


const p =new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12);
    }, 1000);
})

p.catch((e) => {
    console.log('error')
})
p.finally(value => {
    console.log('fin');
})
p.then((value) => {
    console.log(value);
    return '34';
})