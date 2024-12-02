String.prototype.instanceOfSplit = function (separator) {
    const result = []
    let start = 0

    for (let i = 0; i < this.length; ++i) {
        if (this[i] == separator[0]) {
            let temp = this.slice(i, i + separator.length)
            if (temp == separator) {
                result.push(this.slice(start, i))
                start = i + separator.length
            }
        }
    }

    result.push(this.slice(start))
    return result
}