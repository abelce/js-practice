function Cat() {
    // 可以枚举
    this.sayAgain = function () {

    }
}

// 不可以枚举
Cat.prototype.say = function() {}