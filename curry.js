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

function curry2(fn, args) {
    let len = fn.length;
    let args = args || [];

    return function() {
        args = args.concat(Array.from(arguments));
        if (args.length >= len) {
            return fn.apply(this, args);
        } else {
            return curry2(fn, args);
        }
    }

}

function curry3(fn, args) {
    let len = fn.length;
    args = args || [];
    return function() {
        args = args.concat(arguments)
        if (args.length >= len) {
            return fn.apply(this, args);
        } else {
            return curry3(fn, args);
        }
    }
}

function curry4(fn) {
    const len = fn.length;
    let args = Array.prototype.slice.call(arguments, 1);
    return function() {
        args = args.concat(arguments);
        if (args.length >= len) {
            return fn.apply(this, args);
        }
        else {
            return curry4(fn, ...args);
        }
    }
}