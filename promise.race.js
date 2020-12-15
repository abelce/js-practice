Promise.prototype.race = function (list) {
    return new Promise((resolve, reject) => {
        for (let i=0; i<length; i++) {
            Promise.resolve(p).then(resolve, reject);
        }
    })
}