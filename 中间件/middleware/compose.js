// 中间件组合函数
function compose(middlewares) {
    return function(context, next) {
        let index = -1;

        dispatch(0);
        function dispatch(i) {
            if (i<=index) {
                return Promise.reject("next() has been called multiple times");
            }
            index = i;
            let fn = middlewares[i];
            if (i === middlewares.length) fn = next;
            if (!fn) {
                return Promise.resolve();
            }

            try {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            } catch(err) {
                return Promise.reject(err);
            }
        }

    }
}

class Application {
    middlewares = [];

    // 获取中间件的数量
    get middlewareLength() {
        return middlewares.length;
    }

    // 添加中间件
    use(middleware) {
        if (typeof middleware !== 'function') {
            throw new Error('middleware is not function');
        }
        this.middlewares.push(middlewares);
    }

    /**
     * 通过组合的方式来顺序执行中间件
     * @param {*} context: 上下文
     */
    run(context) {
        compose(this.middlewares)(context);
    }
}

/**
 * 测试代码
 */
// const middlewares = [];

// function use(fn) {
//     middlewares.push(fn);
// }

// // 利用中间件的方式可以实现洋葱模型
// use((context, next)=> {
//     //before
//     console.log('1');
//     next();
//     console.log('2');
//     //after
// })

// use((context, next)=> {
//     //before
//     console.log('3');
//     next();
//     console.log('4');
//     //after
// })

// compose(middlewares)({})