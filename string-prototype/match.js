String.prototype.instanceOfMatch = function (regexp) {
    if (!(regexp instanceof RegExp)) {
        throw new TypeError("The argument should be a regular expression")
    }

    let result = [],
        match

    while (match = regexp.exec(this) !== null) {
        result.push(match[0])
    }

    return result.length > 0 ? result : null
}