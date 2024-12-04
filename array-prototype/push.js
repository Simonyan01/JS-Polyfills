Array.prototype.instanceOfPush = function (...args) {
    let currentLength = this.length

    for (let i = 0; i < args.length; ++i) {
        this[currentLength + i] = args[i]
    }

    return this.length
}