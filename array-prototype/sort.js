Array.prototype.instanceOfSort = function (compareFn) {
    compareFn = compareFn || ((a, b) => String(a) > String(b) ? 1 : -1)

    for (let i = 0; i < this.length; ++i) {
        for (let j = 0; j < this.length - i - 1; ++j) {
            if (compareFn(this[j], this[j + 1]) > 0) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]]
            }
        }
    }

    return this
}
