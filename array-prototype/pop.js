Array.prototype.instanceOfPop = function () {
    let removed = this[this.length - 1]
    this.length--

    return removed
}