// Napište funkci, která přijme jako parametr řetězec a převede první písmeno každého slova řetězce na velká písmena.
// Vstup: "the quick brown fox", Výstup: "The Quick Brown Fox"

let sentecnce = "the quick brown fox"

function uppercase(string) {
    let newArray = Array.from(string.split(" "))
    let upper = []
    
    newArray.forEach ((el) => {
        let newEl = el.charAt(0).toUpperCase() + el.slice(1)
        upper.push(newEl)
    })
    return upper.join(" ")
}

console.log(uppercase(sentecnce))