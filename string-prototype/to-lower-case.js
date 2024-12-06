String.prototype.instanceOfToLowerCase = function () {
    let result = ""

    for (let i = 0; i < this.length; ++i) {
        result += String.fromCharCode(this.charCodeAt(i) | 32)
    }

    return result
}