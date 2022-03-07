// Napište funkci pro zjištění a výpis počtu všech písmen ve slově.
// Vstup: "aha", 
// Výstup: "Písmeno A nalezeno 2x. Písmeno H nalezeno 1x."

function countLetters(word) {
    let output = ""
    let firstTimers = []
    let array = Array.from(word.split(""))

    array.forEach((el) => {
        if (!firstTimers.includes(el)) {
        output = output + " Pismeno " + el.toUpperCase() + " nalezeno " + (word.split(el).length - 1) + "x." 
        firstTimers.push(el)  
        }
    })
    return output
}

console.log(countLetters("ahoooj"))
console.log(countLetters("aha"))

// Dokážeš vymyslet efektivnější řešení?
// Kdybychom se bavili o složitosti tohoto algoritmu,
// tak musíš projít celý řetězec a pro každé písmeno voláš funkci split, která opět ten řetězec prochází,
// aby našla všechna místa, kde tento řetězec rozdělit. Šlo by to určitě efektivněji. Např v jednom průchodu.