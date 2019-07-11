const PENDING = Symbol('pending'),
    FULFILLED = Symbol('fulfilled'),
    REJECTED = Symbol('rejected');

function Promise(fn) {
    let self = this;
    self.status = PENDING;

    function resolve(value)  {
        if (self.status === PENDING) {
            self.value = value;
            self.status = FULFILLED;
        }
    }
    function rejected(reason) {
        if (self.status === PENDING) {
            self.reason = reason;
            self.status = REJECTED;
        }
    }
    try{
        fn(resolve, rejected);
    }catch(err) {
        rejected(err);
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    switch(this.status) {
        case FULFILLED:
            onFulfilled(this.value);
            break;
        case REJECTED:
            onRejected(this.reason);
            break;
    }
}