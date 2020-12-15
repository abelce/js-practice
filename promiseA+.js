// let PENDING = 0;
// let FULFILLED = 1;
// let REJECTED = 2;

// function Promise(fn) {
//     let self = this;
//     self.status = PENDING;
//     self.onFulfilled = [];
//     self.onRejected = [];

//     function resolve(value) {
//         if (self.status === PENDING) {
//             self.status = FULFILLED;
//             self.value = value;
//             self.onFulfilled.forEach(full => full());
//         }
//     }

//     function reject(reason) {
//         if (self.status === PENDING) {
//             self.status = REJECTED;
//             self.reason = reason;
//             self.onRejected.forEach(reject => reject());
//         }
//     }

//     fn && fn(resolve, reject);
// }

// Promise.prototype.then = function (onFulfilled, onRejected) {
//     let self = this;
//     // 2.2.1
//     onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
//     onRejected = typeof onRejected === 'function' ? onRejected : reason => reason;
//     let promise2 = new Promise((resolve, reject) => {
//         if (self.status === PENDING) {
//             // 2.2.1.1 如果onFulfilled不是function，则忽略
//                 self.onFulfilled.push(() => setTimeout(() => {
//                     try {
//                         let x = onFulfilled(self.value);
//                         resolvePromise(promise2, x, resolve, reject);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 }));
//             // 2.2.1.2
//                 self.onRejected.push(() => {
//                     setTimeout(() => {
//                         try {
//                             let x = onRejected(self.reason);
//                             resolvePromise(promise2, x, resolve, reject);
//                         } catch (e) {
//                             reject(e);
//                         }
//                     });
//                 });
//         } else if (self.status === FULFILLED) {
//             setTimeout(() => {
//                 try {
//                     let x = onFulfilled(self.value);
//                     resolvePromise(promise2, x, resolve, reject);
//                 } catch (e) {
//                     reject(e);
//                 }
//             })
//         } else if (self.status === REJECTED) {
//             setTimeout(() => {
//                 try {
//                     let x = onRejected(self.reason);
//                     resolvePromise(promise2, x, resolve, reject);
//                 } catch (e) {
//                     reject(e);
//                 }
//             })
//         }
//     })
//     return promise2;
// }

// function resolvePromise(promise, x, resolve, reject) {
//     if (promise === x) {
//         reject(new TypeError('chain cycle'));
//     }
//     if (x && typeof x === 'object' || typeof x === 'function') {
//         let change = false;
//         try {
//             let then = x.then;
//             if (typeof then === 'function') {
//                 then.call(x, (y) => {
//                     if (change) true;
//                     change = true;
//                     resolvePromise(promise, y, resolve, reject);
//                 }, (r) => {
//                     if (change) true;
//                     change = true;
//                     reject(r);
//                 })
//             } else if (typeof then === 'object') {
//                 if (change) true;
//                 change = true;
//                 resolve(x);
//             }
//         } catch (e) {
//             if (change) true;
//             change = true;
//             reject(e);
//         }
//     } else {
//         resolve(x);
//     }
// }

// Promise.resolve = function (param) {
//     if (param instanceof Promise) {
//         return param;
//     }
//     return new Promise((resolve, reject) => {
//         if (param && param.then && param.then === 'function') {
//             setTimeout(() => {
//                 param.then(resolve, reject);
//             })
//         } else {
//             resolve(param);
//         }
//     })
// }

// Promise.reject = function (params) {
//     return new Promise((resolve, reject) => {
//         reject(params);
//     })
// }

// Promise.prototype.catch = function (onRejected) {
//     return this.then(null, onRejected);
// }

// Promise.prototype.finally = function (callback) {
//     return this.then((value) => {
//             return Promise.resolve(callback()).then(() => value);
//         },
//         (err) => {
//             return Promise.resolve(reason).then(() => {
//                 throw err
//             });
//         })
// }

// /**
//  * 1: 如果参数中没哦与元素，返回一个异步回调
//  * 2: 如果参数中的元素不是promise，或thenable对象，
//  */
// Promise.all = function (promises) {

//     return new Promise((resolve, reject) => {
//         let index = 0;
//         let len = promises.length;
//         let res = [];

//         if (len === 0) {
//             resolve();
//             return;
//         }

//         function proccessValue(i, value) {
//             res[i] = value;
//             if (++index === len) {
//                 resolve(res);
//             }
//         }

//         for (let i = 0; i < len; i++) {
//             Promise.resolve(promises[i]).then((value) => {
//                 proccessValue(i, value);
//             }, (err) => {
//                 reject(err);
//                 return;
//             })
//         }
//     })
// }

// Promise.race = function (promises) {
//     return new Promise((resolve, reject) => {
//         let len = promises.length;
//         if (len === 0) {
//             resolve();
//             return;
//         }
//         for (let i = 0; i < len; i++) {
//             Promise.resolve(promises[i]).then((value) => {
//                 resolve(value);
//             }, (err) => {
//                 reject(err);
//                 return;
//             })
//         }
//     })
// }

// Promise.defer = Promise.deferred = function () {
//     let dfd = {};
//     dfd.promise = new Promise((resolve, reject) => {
//         dfd.resolve = resolve;
//         dfd.reject = reject;
//     });
//     return dfd;
// }


// module.exports = Promise;

// const PENDING = 'pending';
// const FULFILLED = 'fulfilled';
// const REJECTED = 'rejected';

// function Promise(fn) {

//     let self = this;
//     self.status = PENDING;
//     self.onFulfilled = [];
//     self.onRejected = [];

//     function resolve(value) {
//         if (self.status === PENDING) {
//             self.status = FULFILLED
//             self.value = value;
//         }
//     }

//     function reject(reason) {
//         if (self.status === PENDING) {
//             self.status = REJECTED
//             self.reason = reason;
//         }
//     }

//     fn && fn(resolve, reject);
// }

// Promise.prototype.then = function (onFulfilled, onRejected) {
//     let self = this;
//     onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
//     onRejected = typeof onRejected === 'function' ? onRejected : reason => {
//         throw reason
//     };

//     const promise2 = new Promise((resolve, reject) => {
//         if (self.status === PENDING) {
//             self.onFulfilled.push((value) => {
//                 setTimeout(() => {
//                     try {
//                         onFulfilled(value);
//                     } catch (err) {
//                         reject(err);
//                     }
//                 })
//             })
//             self.onRejected.push((reason) => {
//                 setTimeout(() => {
//                     try {
//                         onRejected(reason);
//                     } catch (err) {
//                         reject(err);
//                     }
//                 })
//             })
//         } else if (self.status === FULFILLED) {
//             setTimeout(() => {
//                 try {
//                     // self.onFulfilled.forEach(cb => cb(self.value));
//                     onFulfilled(self.value);
//                     return;
//                 } catch (err) {
//                     reject(err);
//                 }
//             })
//         } else if (self.status === REJECTED) {
//             setTimeout(() => {
//                 try {
//                     onRejected(self.reason);
//                     return;
//                 } catch (err) {
//                     reject(err);
//                 }
//             })
//         }
//     });

//     return promise2;
// }


// Promise.defer = Promise.deferred = function () {
//     let dfd = {};
//     dfd.promise = new Promise((resolve, reject) => {
//         dfd.resolve = resolve;
//         dfd.reject = reject;
//     });
//     return dfd;
// }


// module.exports = Promise;


const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


function Promise(fn) {
    this.status = PENDING;
    this.onFulfiled = [];
    this.onRejected = [];

    const self = this;
    const resolve = function (value) {
        if (self.status === PENDING) {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfiled.forEach(ful => ful(value));
        }
    }

    const reject = function (reason) {
        if (self.status === PENDING) {
            self.status = REJECTED;
            self.reason = reason;
            self.onRejected.forEach(reject => reject(reason));
        }
    }

    fn && fn(resolve, reject);
}

Promise.protytype.then = function (onFulfiled, onRejected) {
    onFulfiled = typeof onFulfiled === 'fucntion' ? onFulfiled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => reason;
    const pro = new Promise((resolve, reject) => {
        if (this.status === PENDING) {
            this.onFulfiled.push(() => {
                setTimeout(() => {
                    let x = onFulfiled(this.value);
                    resolvepromise(pro, x, resolve, reject);
                })
            })
            this.onRejected.push((reason) => {
                setTimeout(() => {
                    let x = onRejected(reason);
                    resolvepromise(pro, x, resolve, reject);
                })
            })
        } else if (this.status === FULFILLED) {
            try {
                setTimeout(() => {
                    onFulfiled(this.value)
                })
            } catch (err) {
                reject(err);
            }

        } else if (this.status === REJECTED) {
            try {
                setTimeout(() => {
                    onRejected(this.reason);
                })
            } catch (err) {
                reject(err);
            }
        }
    })

    return pro;
}

function resolvepromise(promise, x, resolve, reject) {
    if (promise === x) {
        throw new Error('promise loop')
    }

    if (x && typeof x === 'object' || typeof x === 'function') {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, (y) => {
                    resolvePromise(promise, y, resolve, reject);
                }, (e) => {
                    reject(e);
                })
            } else if (typeof then === 'object') {
                resolve(x);
            }
        } catch (e) {
            reject(e);
        }
    } else {
        resolve(x);
    }
}


Promise.prototype.resolve = function (params) {
    if (params instanceof Promise) {
        return params;
    }
    return new Promise((resolve, reject) => {
        if (params && params.then && typeof params.then === 'function') {
            params.then(resolve, reject);
        } else {
            resolve(params);
        }
    })
}

Promise.prototype.finally = function () {
    return this.then(value => Promise.resolve().then(() => value),
        reason => Promise.reject().then(() => reason)
    )
}

Promise.prototype.all = function(list) {
    let resolves  = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for(let i = 0; i < list.length; i++ ) {
            Promise.resolve(list[i]).then(value => {
                resolves[i] = value;
                count++;
                if (count === list.length) {
                    resolve(resolves);
                }
            }, 
            e => {
                reject(e);
            })
        }
    })
}

Promise.prototype.catch = function(onReject) {
    return this.then(null, onReject);
}