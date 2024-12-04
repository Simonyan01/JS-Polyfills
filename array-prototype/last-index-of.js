Array.prototype.instanceOfLastIndexOf = function (searchElement) {
    for (let i = this.length - 1; i >= 0; --i) {
        if (this[i] === searchElement) {
            return i
        }
    }

    return -1
}