String.prototype.instanceOfMatchAll = function (regexp) {
    if (!(regexp instanceof RegExp)) {
        throw new TypeError("The argument should be a regular expression")
    }

    const matches = []
    let match

    while ((match = regexp.exec(this)) !== null) {
        matches.push(match)
    }

    return matches[Symbol.iterator]()
}