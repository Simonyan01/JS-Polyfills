String.prototype.instanceOfEndsWith = function (searchStr, length = this.length) {
    length = length < 0 ? 0 : length

    return this.substring(length - searchStr.length, length) === searchStr
}