Array.prototype.instanceOfWith = function (idx, val) {
    if (idx < 0 || idx >= this.length) {
        throw new RangeError("Index out of bounds")
    }

    const newArr = [...this]
    newArr[idx] = val

    return newArr
}