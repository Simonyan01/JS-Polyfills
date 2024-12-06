Array.prototype.instanceOfToSorted = function (compareFn) {
    compareFn = compareFn || ((a, b) => String(a) > String(b) ? 1 : -1)

    let copy = [...this]

    for (let i = 0; i < copy.length; ++i) {
        for (let j = 0; j < copy.length - i - 1; ++j) {
            if (compareFn(copy[j], copy[j + 1]) > 0) {
                [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]]
            }
        }
    }

    return copy
}
