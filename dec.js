class Amin {

    @log
    eat(a, b) {
        return a + b;
    }
}

function log (target, name, descriptor) {

    const oldValue = descriptor.value;
    return descriptor.value = function() {
        console.log(`log ${name}:`, arguments);
        return oldValue.apply(this, arguments);
    }
}

const obj = {
    [Symbol.Iterator]: function() {
        return {
            next: function() {
                
            }
        }
    }
}