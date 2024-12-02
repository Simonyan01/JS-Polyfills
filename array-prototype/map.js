Array.prototype.instanceOfMap = function (callbackFn) {
    if (typeof callbackFn !== "function") {
        throw new Error(`${callbackFn} is not a function`)
    }

    const result = []

    for (let i = 0; i < this.length; ++i) {
        if (i in this) {
            result.push(callbackFn(this[i], i, this))
        }
    }

    return result
}
