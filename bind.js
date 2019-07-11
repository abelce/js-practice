if (!Function.prototype.bind) {
    Function.prototype.bind = function(that) {
        if (typeof this === 'function') {
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
        }
    
        var args = Array.prototype.slice.call(arguments,1);
        var fToBind = this;
        var fNop = function(){};

        // 返回的Fbind作为new的构造函数时，生成的新对象作为this传入Fbind,新对象的__proto__就是fNop的实例
        var Fbind = function() {
            args = args.concat(Array.prototype.slice.call(arguments));
            return fToBind.apply(this instanceof Fbind ? this : that, args);
        }
        
        // 维持原型链
        if (this.prototype) {
            fNop.prototype = this.prototype;
        }
        Fbind.prototype = new fNop();
    
        return Fbind;
    }
}