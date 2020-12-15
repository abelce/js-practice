function Ofo() {}

function Bick() {
    this.name = 'mybick'
}

var myBick = new Ofo()

Ofo.prototype = new Bick()

var youbick = new Bick()

console.log(myBick.name)

console.log(youbick.name)

type pick<T, P extends keyof T> = {
    [K in P]: T[K]
}