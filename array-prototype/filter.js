Array.prototype.instanceOfFilter = function (callbackFn) {
    if (typeof callbackFn !== "function") {
        throw new Error(`${callbackFn} is not a function`)
    }

    const result = []

    for (let i = 0; i < this.length; ++i) {
        if (callbackFn(this[i], i, this)) {
            result.push(this[i])
        }
    }

    return result
}