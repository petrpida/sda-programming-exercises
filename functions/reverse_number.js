// Napište funkci, která obrátí číslo, které dostane zadané parametrem.
// Vstup: 3245, Výstup: 5423

function reverseNumber (number) {
    return Number(Array.from(String(number)).reverse().join(""))
}

console.log(reverseNumber(2468))