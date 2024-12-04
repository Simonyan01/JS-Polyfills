Array.prototype.instanceOfReverse = function () {
    let reversedArr = []

    for (let i = this.length - 1; i >= 0; --i) {
        reversedArr.push(this[i])
    }

    for (let i = 0; i < this.length; ++i) {
        this[i] = reversedArr[i]
    }

    return this
}