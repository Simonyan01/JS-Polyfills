Array.prototype.instanceOfEvery = function (callbackFn) {
    if (typeof callbackFn !== "function") {
        throw new TypeError(`${callbackFn} is not a function`)
    }

    for (let i = 0; i < this.length; ++i) {
        if (!callbackFn(this[i], i)) {
            return false
        }
    }
    
    return true
}