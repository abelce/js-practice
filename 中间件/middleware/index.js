

const middlewares = [];

function use(fn) {
    middlewares.push(fn);
}

// 利用中间件的方式可以实现洋葱模型
use((context, next)=> {
    //before
    console.log('1');
    next();
    console.log('2');
    //after
})