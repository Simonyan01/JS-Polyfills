Array.prototype.instanceOfValues = function () {
    let idx = 0

    return {
        next: function () {
            if (idx < this.length) {
                return { value: this[++idx], done: false }
            } else {
                return { value: undefined, done: true }
            }
        }
    }
}

