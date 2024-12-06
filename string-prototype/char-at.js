String.prototype.instanceOfCharAt = function (idx) {
    if (idx < 0 || idx >= this.length) {
        return ""
    }

    return this[idx]
}