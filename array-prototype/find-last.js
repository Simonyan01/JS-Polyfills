Array.prototype.instanceOfFindLast = function (callbackFn) {
    if (typeof callbackFn !== "function") {
        throw new TypeError(`${callbackFn} is not a function`)
    }

    for (let i = this.length - 1; i >= 0; --i) {
        if (callbackFn(this[i], i, this)) {
            return this[i]
        }
    }

    return undefined
}