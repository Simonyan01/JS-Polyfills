String.prototype.instanceOfRepeat = function (count) {
    count = Math.floor(Number(count));

    if (count === 0) return '';

    let result = ""

    while (count--) {
        result += String(this)
    }

    return result
}