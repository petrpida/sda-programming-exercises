// Napište funkci, která jako parametr přijme řetězec a najde nejdelší slovo v řetězci.
// Vstup: "Web Development Tutorial", Výstup: "Development"

let sentence = "Web Development Tutorial"

// FOR ONE WORD ONLY
function findLongestWord(string) {
    let words = Array.from(string.split(" "))
    let longestWord = ""

    words.forEach((el) => {
        if (el.length > longestWord.length) {
            longestWord = el
        }
    })
    return longestWord
}

console.log(findLongestWord(sentence));

// FOR MORE WORDS

// function findLongestWords (string) {
//     let words = Array.from(string.split(" "))
//     let longestWord = "";
//     let moreWords = [];
//     words.forEach((el) => {
//         if (el.length > longestWord.length) {
//             moreWords = []
//             moreWords.push(el)
//             longestWord = el
//         } else if (el.length === longestWord.length) {
//             moreWords.push(el)
//         }
//     })

//     return moreWords.toString()
// }

//console.log(findLongestWords(sentence));
