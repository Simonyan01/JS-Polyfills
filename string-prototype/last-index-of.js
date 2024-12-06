String.prototype.instanceOfLastIndexOf = function (searchStr, position = this.length - 1) {
    if (position < 0) {
        position = 0;
    } else if (position >= this.length) {
        position = this.length - 1;
    }

    for (let i = position; i >= 0; --i) {
        if (this.substring(i, i + searchStr.length) === searchStr) {
            return i
        }
    }

    return -1
}