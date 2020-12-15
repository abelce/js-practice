


// const convert = list => {
//     /**
//      * map = {
//      *  0: [{}, {}],
//      *  1: [{}, {}]
//      * }
//      */
//     let map = new Map();
//     let result = []
//     list.forEach(el => {
//         map.set(el.id, el);
//     });

//     list.forEach(el => {
//         let parent = map.get(el.parentId);
//         if (!parent) {
//             // parentId === 0
//             el.children = [];
//             return;
//         }
//         if (parent.hasOwnProperty('children')) {
//             parent.children.push(el);
//         } else {
//             parent['children'] = [];
//             parent.children.push(el);
//         }
//     });

//     for (let i = 0; i < list.length; i++) {
//         const el = list[i];
//         if (el.parentId === 0) {
//             result.push(el);
//         }
//     }
//     return result
// };



function convert(list) {
    let map = new Map()
    let result = [];

    for (let i=0; i<list.length; i++) {
        map.set(list[i].id, list[i]);
        if (list[i].parentId === 0) {
            result.push(list[i]);
        }
    }

    for (let i=0; i<list.length; i++) {
        let item = list[i];
        let parent = map.get(item.parentId);

        if (!parent) {
            item.children = [];
            continue;
        }

        if (!Reflect.has(parent, 'children')) {
            parent.children = [];
        }
        parent.children.push(item);
    }
    return result;
}

// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list);
console.log(result)