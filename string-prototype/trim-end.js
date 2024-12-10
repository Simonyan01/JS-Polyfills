String.prototype.instanceOfTrimEnd = function () {
    if (this == null) {
        throw new TypeError("String.prototype.instanceOfTrim called on null or undefined");
    }

    return String(this).replace(/^\s+$/, "")
}