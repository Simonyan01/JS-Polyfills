String.prototype.instanceOfPadStart = function (length, padString = " ") {
    let str = String(this)

    if (length <= 0) return str

    let padLength = length - str.length
    padString = String(padString)

    if (padLength <= 0) return str

    let pad = ""
    while (pad.length < padLength) {
        pad += padString
    }

    return pad.slice(0, padLength) + str
}