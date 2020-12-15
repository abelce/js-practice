function throtte(fn, delay) {
    let last,
        context = this;
    delay = delay || 300;
    return function() {
        let now = +new Date();
        if (last) {
            if (last - now >= delay) {
                let $timer = setTimeout(() => {
                    fn.call(context, ...arguments);
                    last = now;
                    clearTimeout($timer);
                }, delay);
            }
        } else {
            now = last;
            fn.call(context,  ...arguments);
        }
    }
}

function throttle(fn, delay) {
    let $timer;
    return function() {
        const that = this;
        if (!$timer) {
            $timer = setTimeout(() => {
                fn.apply(that, arguments);
                clearTimeout($timer);
            }, delay);
        }
    }
}