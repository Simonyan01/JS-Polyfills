Array.prototype.instanceOfUnshift = function (...args) {
    let currentLength = this.length

    for (let i = currentLength - 1; i >= 0; --i) {
        this[i + args.length] = this[i]
    }

    for (let i = 0; i < args.length; ++i) {
        this[i] = args[i]
    }

    return this.length
}