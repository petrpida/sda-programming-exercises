// Napiště funkci findDup(), která pro zadané pole vrací všechny prvky, které se v daném poli opakují více než jednou.

function findDup(array) {
    let firstTimers = []
    let dupArray = []

    array.forEach(element => {
        if (firstTimers.includes(element) && !dupArray.includes(element)) {
            dupArray.push(element)
        }
        firstTimers.push(element)
    });
    return dupArray
}

console.log(findDup([1, 2, 2, 2, 3, 3, 4, 4, 5]))