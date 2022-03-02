// Napište funkci, která vrátí předaný řetězec s písmeny v abecedním pořadí.
// Vstup: "webmaster", Výstup: "abeemrstw"

let str = "webmaster"

function abcSort (string) {
    return Array.from(string).sort().join("").toString()
}

console.log(abcSort(str))