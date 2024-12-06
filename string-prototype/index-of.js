String.prototype.instanceOfIndexOf = function (searchStr, position = 0) {
    position = position < 0 ? Math.max(this.length + position, 0) : position

    for (let i = position; i <= this.length - searchStr.length; ++i) {
        if (this.substring(i, i + searchStr.length) === searchStr) {
            return i
        }
    }

    return -1
}