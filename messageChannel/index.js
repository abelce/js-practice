

const ch = new MessageChannel()
ch.port1.onmessage = function(e) {
    console.log('m1', e.data);
}
ch.port2.onmessage = function(e) {
    console.log('m2', e.data);
}

ch.port1.postMessage("hello")