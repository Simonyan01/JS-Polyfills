Array.prototype.instanceOfAt = function (idx) {
    idx = Math.trunc(idx) || 0

    if (idx < 0) {
        idx += this.length
    }

    if (idx >= this.length) {
        return undefined
    }

    return this[idx]
}