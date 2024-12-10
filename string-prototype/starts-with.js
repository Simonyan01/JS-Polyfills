String.prototype.instanceOfStartsWith = function (searchStr, position = 0) {
    let str = String(this)

    searchStr = String(searchStr)
    position = Math.max(position, 0)

    return str.slice(position, position + searchStr.length) === searchStr
}