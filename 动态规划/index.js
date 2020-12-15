// 使用数组中的数据进行组合，结果等于13，数字可以重复
const data = [2, 3, 5, 7, 9];

function sum (list, total) {
    if (list.length === 0) {
        return [];
    }
    // let result = [];
    // list.forEach(item => {
    //     const sub = total - item;
    //     if (sub === 0) {
    //         result.push([item]);
    //     } else if (sub > 0) {
    //         const res = sum(list, sub);
    //         res.forEach(a => a.unshift(item));
    //         result = result.concat(res);
    //     }
    // })

    // return result;

    return list.map(item => {
        const sub = total - item;
        if (sub === 0) {
            return [item];
        } else if (sub > 0){
            return sum(list, sub).forEach(a => a.unshift(item)) || [];
        }
        return [];
    }).filter(item => item.length);
}

console.log(JSON.stringify(sum(data, 13)));

