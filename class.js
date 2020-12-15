class Foo{
    constructor(...args) {
        this.args = args;
    }
    handleDelete() {
        
    }
    handleClick =() => {

    }
    * [Symbol.itertor] () {
        for (let key of this.args) {
            yield key;
        }
    }
}

console.log(Foo.prototype);