Array.prototype.instanceOfShift = function () {
    let removed = this[0]

    for (let i = 0; i < this.length - 1; ++i) {
        this[i] = this[i + 1]
    }

    this.length--

    return removed
}