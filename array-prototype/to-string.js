Array.prototype.instanceOfToString = function () {
    // return this.join(", ")

    let result = ""

    for (let i = 0; i < this.length; ++i) {
        if (i > 0) {
            result += ", "
        }
        result += this[i]
    }

    return result
}