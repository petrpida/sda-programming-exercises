// Napište pomocí cyklu for funkci max, která pro zadané pole čísel vypíše jeho největší prvek

function max(array) {
    let min = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < array.length; i++) {
        if (array[i] > min) {
        min = array[i]
        }
    }
    return min
}

console.log(max([2301, 45, 12, 4, 18900, 234, 1]))