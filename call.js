Function.prototype.call = function(obj) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.call-----is not a function');
    }
    let that = obj;
    if (typeof obj === 'undefind' || obj === null) {
        that = window;
    }
    var args = [...arguments].slice(1);
    
    that.fn = this;
    var result = that.fn(...args);
    Reflect.deleteProperty(that, 'fn');
    return result;
}