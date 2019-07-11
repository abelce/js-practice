Function.prototype.call = function(that) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.call-----is not a function');
    }
    var args = [...arguments].slice(1);
    that.fn = this;
    
    var result = that.fn(...args);
    Reflect.deleteProperty(that, 'fn');
    return result;
}