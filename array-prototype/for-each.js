Array.prototype.instanceOfForEach = function (callbackFn) {
    if (typeof callbackFn !== "function") {
        throw new TypeError(`${callbackFn} is not a function`)
    }

    for (let i = 0; i < this.length; ++i) {
        if (this[i] instanceof Object) {
            callbackFn(this[i], i, this)
        }
    }
}