Array.prototype.instanceOfFindIndex = function (callbackFn) {
    if (typeof callbackFn !== "function") {
        throw new TypeError(`${callbackFn} is not a function`)
    }

    for (let i = 0; i < this.length; ++i) {
        if (callbackFn(this[i], i, this)) {
            return i
        }
    }

    return -1
}