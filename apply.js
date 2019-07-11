Function.proptotype.apply = function() {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.apply-----is not a function');
    }
    that.fn = this;
    
    var result = 
    arguments[1]
    ? that.fn(...arguments[1])
    : that.fn();

    Reflect.deleteProperty(that, 'fn');
    return result;
}