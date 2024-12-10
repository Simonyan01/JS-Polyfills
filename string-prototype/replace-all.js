String.prototype.instanceOfReplaceAll = function (searchVal, replaceVal) {
    let str = String(this)

    if (typeof searchVal === "string") {
        const escapedSearchValue = searchVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedSearchValue, 'g')
        return str.replace(regex, replaceVal);
    }

    if (searchVal instanceof RegExp) {
        if (!searchVal.flags.includes("g")) {
            throw new TypeError("`instanceOfReplaceAll` requires the global (`g`) flag when using a regex");
        }
        return str.replace(searchVal, replaceVal);
    }

    throw new TypeError("First argument to instanceOfReplaceAll must be a string or a RegExp");
}