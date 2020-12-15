function debounce(fn, timeout) {
    let $timer;
    return function() {
        if ($timer) {
            clearTimeout($timer);
        }
        $timer = setTimeout(() => {
            fn.call(this, ...arguments);
        }, timeout);
    }
}

function debounce(fn, delay = 0) {
    let $timer;
    return function () {
        let context = this
        clearInterval($timer);
        $timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, delay);
    }
}