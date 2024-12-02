Array.prototype.instanceOfToSpliced = function (start, deleteCount, ...args) {
    let result = this.slice(0, start)

    result.push(...args)
    result.push(...this.slice(start + deleteCount))

    return result
}