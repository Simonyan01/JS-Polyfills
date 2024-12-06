String.prototype.instanceOfConcat = function (...str) {
    let result = this

    for (let i = 0; i < str.length; ++i) {
        result += str[i]

    }

    return result
}
