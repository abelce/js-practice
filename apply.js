Function.proptotype.apply = function(obj) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.apply-----is not a function');
    }
    let that = obj;
    if (typeof obj === 'undefined' || obj === null) {
        that = window;
    }
    
    var args = Array.from(arguments)[1];
    that.fn = this;
    var result = that.fn(...args);
    Reflect.deleteProperty(that, 'fn');
    
    return result;
}



Function.prototype.apply = function(obj) {
    let that = obj;
    if (obj === undefined || obj === null) {
        that = window;
    }
    that.fn = this;
    let args = Array.from(arguments)[1] || [];
    let result = that.fn(...args);

    Reflect.deleteProperty(that, fn);

    return result;
}