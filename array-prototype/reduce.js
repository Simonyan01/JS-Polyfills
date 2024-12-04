Array.prototype.instanceOfReduce = function (callbackFn, initial) {
    if (typeof callbackFn !== "function") {
        throw new TypeError(`${callbackFn} is not a function`)
    }

    let acc = initial ?? this[i]
    let start = initial === undefined ? 1 : 0

    for (let i = start; i < this.length; ++i) {
        acc = callbackFn(acc, this[i], i, this)
    }

    return acc
}