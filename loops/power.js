// Napište pomocí cyklu for funkci numPower(num, n) pro vrácení mocniny čísla pro zadanou exponenciální hodnotu (vratí n-tou mocninu čísla num)
// numPower(2,3) = 8, numPower(4,3) = 64

function numPower(num, n) {
    let sum = 1
    for (let i = 0; i < n; i++) {
        sum = sum * num
    }
    return sum
}

console.log(numPower(4, 3))