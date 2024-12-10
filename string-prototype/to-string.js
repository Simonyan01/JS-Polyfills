String.prototype.instanceOfToString = function () {
    if (this == null) {
        throw new TypeError("String.prototype.instanceOfToString called on null or undefined");
    }

    return String(this)
}