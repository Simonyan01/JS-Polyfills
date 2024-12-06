String.prototype.instanceOfIncludes = function (searchStr, position = 0) {
    if (position < 0) {
        position = Math.max(this.length + position, 0)
    }

    return this.indexOf(searchStr, position) !== -1
}