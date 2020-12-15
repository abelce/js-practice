// if (!Function.prototype.bind) {
//     Function.prototype.bind = function(that) {
//         if (typeof this === 'function') {
//             throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
//         }
    
//         var args = Array.prototype.slice.call(arguments,1);
//         var fToBind = this;
//         var fNop = function(){};

//         // 返回的Fbind作为new的构造函数时，生成的新对象作为this传入Fbind,新对象的__proto__就是fNop的实例
//         var Fbind = function() {
//             args = args.concat(Array.prototype.slice.call(arguments));
//             return fToBind.apply(this instanceof Fbind ? this : that, args);
//         }
        
//         // 维持原型链
//         if (this.prototype) {
//             fNop.prototype = this.prototype;
//         }
//         Fbind.prototype = new fNop();
    
//         return Fbind;
//     }
// }



// Function.prototype.bind = function(obj) {

//     let args = Array.from(arguments).slice(1) ;
//     let that = this;
//     let FNOP = function(){};
//     let FBind = function() {
//         return   that.apply(this instanceof FBind ? this : obj, args);
//     }

//     if (this.prototype) {
//         FNOP.prototype = this.prototype;
//     }
//     FBind.prototype = new FNOP();

//     return FBind;
// }



Function.prototype.bind = function(obj) {
    let args = Array.prototype.slice.call(arguments, 1);
    let that = this;
    let Fnop = function() {};
    let Fbind = function() {
        arags = arags.concat(Array.from(arguments));
        return that.apply(this instanceof Fbind ? this : obj, args);
    }
    if (this.prototype) {
        Fnop.prototype = this.prototype;
    }
    Fbind.prototype = new Fnop();

    return Fbind;
}



Function.prototype.bind = function(obj) {
    let that = this;
    let fnop = function(){};
    let args = [...arguments].slice(1);
    
    let target = function() {
        args = args.concat(Array.from(arguments));
        return that.apply(this instanceof target ? this : obj, args);
    }

    if (that.prototype) {
        fnop.prototype = that.prototype;
    }
    target.prototype = new fnop();


    return target;
}