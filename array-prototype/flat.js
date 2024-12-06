Array.prototype.instanceOfFlat = function (depth = 1) {
    let result = []

    const flatten = (arr, depth) => {
        for (let i = 0; i < arr.length; ++i) {
            if (Array.isArray(arr[i]) && depth > 0) {
                flatten(arr[i], depth - 1)
            } else {
                result.push(arr[i])
            }

        }
    }

    flatten(this, depth)

    return result
}