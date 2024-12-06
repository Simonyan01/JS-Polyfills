Array.prototype.instanceOfFlatMap = function (callbackFn) {
    let result = []

    for (let i = 0; i < this.length; ++i) {
        let withMap = callbackFn(this[i], i, this)

        if (Array.isArray(withMap)) {
            result.push(...withMap)
        } else {
            result.push(withMap)
        }
    }

    return result
}
