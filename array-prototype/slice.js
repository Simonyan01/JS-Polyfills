Array.prototype.instanceOfSlice = function (start = 0, end = this.length) {
    let result = []

    start = start < 0 ? Math.max(this.length + start, 0) : Math.min(start, this.length)
    end = end < 0 ? Math.max(this.length + end, 0) : Math.min(end, this.length)

    for (let i = start; i < end; ++i) {
        result.push(this[i])
    }

    return result
}
