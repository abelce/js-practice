function multiFn(a, b, c) {
    console.log(a, b, c);
}

function curry(fn) {
    let argsLength = fn.length;
    let args = [];
    let temp = function() {
        args = args.concat(Array.prototype.slice.call(arguments));
        if(args.length >= argsLength) {
            fn.bind(this, ...args.slice(0, argsLength));
        } else {
            return temp;
        }
    }
}