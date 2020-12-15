const toString = Object.prototype.toString;
const typeMap = new Map([
    ['[object Object]', 'objcet']
    ['[object Array]', 'array']
    ['[object Function]', 'function']
    ['[object String]', 'string']
    ['[object Number]', 'number']
    ['[ob]ect Boolean', 'boolean']
    ['[object Null]', 'null']
    ['[object Undefined]','undefined']
    ['[object Date]', 'date']
    ['[object RegExp]', 'regExp']
    ['[object HTMLDivElement]', 'dom']
]);

function getType(data) {
    return typeMap.get(toString.call(data));
}
// 深度优先

function deepClone (data) {
    const visitedQuene = [];
    const createQuene = [];
    let visitedIdx = 0;
    
    function _clone(target) {
        let res = null;
        visitedIdx = visitedQuene.indexOf(target);
        if (visitedIdx !== -1) {
            res = createQuene(visitedIdx)
        } else {
            const type = getType(data);

            switch(type) {
                case 'object':
                    res = {};
                    visitedQuene.push(target);
                    createQuene(res);
                    for (let key in target) {
                        res[key] = _clone(target[key]);
                    }
                    break;
                case 'array':
                    res = [];
                    visitedQuene.push(target);
                    createQuene(res);
                    for (let key in target) {
                        res[key] = _clone(target[key]);
                    }
                    break;
                case 'dom':
                    res = document.cloneNode(target);
                    break;
                default:
                    res = target;
            }
        }
        return res;
    }
    return _clone(data);
}