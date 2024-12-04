Array.prototype.instanceOfConcat = function (...args) {
    const newArr = [...this]

    for (let i = 0; i < args.length; ++i) {
        if (Array.isArray(args[i])) {
            newArr.push(...args[i])
        } else {
            newArr.push(args[i])
        }
    }

    return newArr
}