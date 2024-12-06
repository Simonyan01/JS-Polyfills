Array.prototype.instanceOfPush = function (...args) {
    for (let i = 0; i < args.length; ++i) {
        this[this.length + i] = args[i]
    }

    return this.length
}