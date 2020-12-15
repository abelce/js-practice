function demo() {
    console.log('1231');
    this.names = 'abc';
}

demo.prototype.setName = function(value) {
    this.names = value;
    console.log(this.names);
}

const a = new demo();
a.setName('efg');