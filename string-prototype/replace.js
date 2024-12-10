String.prototype.instanceOfReplace = function (searchVal, replaceVal) {
    let str = String(this)

    if (typeof searchVal === "string") {
        const index = str.indexOf(searchVal)
        if (index === -1) return str
        return (
            str.slice(0, index) +
            String(replaceVal) +
            str.slice(index + searchVal.length)
        )
    }

    if (searchVal instanceof RegExp) {
        const match = str.match(searchVal)
        if (!match) return str

        const replacement = typeof replaceVal === "function"
            ? replaceVal(...match, match.index, str)
            : String(replaceVal)

        return (
            str.slice(0, match.index) +
            replacement +
            str.slice(match.index + match[0].length)
        )
    }

    throw new TypeError("First argument to instanceOfReplace must be a string or a RegExp")
}