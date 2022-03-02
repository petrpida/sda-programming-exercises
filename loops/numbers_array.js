// Implementujte dvě funkce.
// Každá bude přijímat parametry min, max, descending.
// Min, max jsou čísla a descending pravdivostní hodnota.
// Obě funkce vytvoří a vrátí pole obsahující všechna čísla v rozmezí čísel min a max.
// Pokud parametr descending je roven true, pak pole bude obsahovat čísla v sestupném pořadí.
// První funkce vypíše čísla pomocí cyklu for a druhá pomocí cyklu while.

function getArray(min, max, descending) {
    let newArray = []
    if (descending === false) {
        for (let i = min; i <= max; i++) {
            newArray.push(i);
        }
    } else {
        let i = max
        while (i >= min) {
            newArray.push(i)
            i--
        }
    }
    return newArray
}

console.log(getArray(0, 9, true))