Array.prototype.instanceOfUnshift = function (...args) {
    // this.splice(0, 0, ...args)
    // return this.length

    for (let i = this.length - 1; i >= 0; --i) {
        this[i + args.length] = this[i]
    }

    for (let i = 0; i < args.length; ++i) {
        this[i] = args[i]
    }

    return this.length
}