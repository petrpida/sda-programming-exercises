// Napište pomocí cyklu for funkci min, která pro zadané pole čísel vypíše jeho nejmenší prvek

function min(array) {
    let min = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

console.log(min([1, -34, 24, 67, 231, 12, 0, 6578]))