Array.prototype.instanceOfSplice = function (start, deleteCount, ...args) {
    let middle = this.slice(start, start + deleteCount)
    let end = this.slice(start + deleteCount)

    this.length = start
    this.push(...args)
    this.push(...end)

    return middle
}