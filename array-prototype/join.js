Array.prototype.instanceOfJoin = function (separator = ",") {
    separator = String(separator)

    let result = ""

    for (let i = 0; i < this.length; ++i) {
        if (i > 0) {
            result += separator
        }
        result += this[i] ?? ""
    }

    return result
}