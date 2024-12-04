Array.prototype.instanceOfIndexOf = function (searchElement) {
    for (let i = 0; i < this.length; ++i) {
        if (this[i] === searchElement) {
            return i
        }
    }

    return -1
}