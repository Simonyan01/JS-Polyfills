Array.prototype.instanceOfFill = function (val, start = 0, end = this.length) {
    start = start < 0 ? Math.max(this.length + start, 0) : start
    end = end < 0 ? Math.max(this.length + end, 0) : end

    for (let i = start; i < end; ++i) {
        this[i] = val
    }

    return this
}