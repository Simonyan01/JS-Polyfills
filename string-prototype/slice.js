String.prototype.instanceOfSlice = function (start, end) {
    start = start || 0
    end = end === undefined ? this.length : end

    if (start < 0) start = Math.max(this.length + start, 0)
    if (end < 0) end = Math.max(this.length + end, 0)

    let result = ""
    for (let i = start; i < end; ++i) {
        result += this.charAt(i)
    }

    return result
}