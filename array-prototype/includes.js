Array.prototype.instanceOfIncludes = function (searchElement, fromIndex = 0) {
    while (fromIndex < this.length) {
        if (this[fromIndex] === searchElement) {
            return true
        }

        fromIndex++
    }
    return false
}