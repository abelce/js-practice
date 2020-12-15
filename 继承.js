function Super(){}
function sub() {
    Super.call(this, arguments);
}
sub.prototype = Object.create(Super.prototype)
sub.prototype.constructor = sub;
sub.__proto__ = Super;




// let sub = Object.create(new )

function New(fn, ...args){
    let obj = Object.create(fn.prototype)
    let ret = fn.apply(obj, args)
    return ret instanceof Object ? ret : obj;
}