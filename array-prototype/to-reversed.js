Array.prototype.instanceOfReverse = function () {
    let reversedArr = []

    for (let i = this.length - 1; i >= 0; --i) {
        reversedArr.push(this[i])
    }

    return reversedArr
}