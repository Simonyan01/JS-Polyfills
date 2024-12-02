Array.prototype.instanceOfReduce = function (callback, initial) {
    if (typeof callback !== "function") {
        throw new Error(`${callback} is not a function`)
    }

    let acc = initial ?? this[i]
    let start = initial === undefined ? 1 : 0

    for (let i = start; i < this.length; ++i) {
        acc = callback(acc, this[i], i, this)
    }

    return acc
}