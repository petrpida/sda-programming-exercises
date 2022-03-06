// Napiště funkci palindrome, která pro zadané slovo vrátí true nebo false na základě toho, jestli dané slovo je palindromem.
// Vstup: "ahoj", Výstup: false
// Vstup: "aha", Výstup: true

function isItPalindrome(word) {
    if (word.toLowerCase() === Array.from(word).reverse().join("").toLowerCase()) {
        console.log(`${word} is a palindrome`)
        return true
    }
    console.log(`${word} is NOT a palindrome`)
    return false
}

console.log(isItPalindrome("ahoj"))
console.log(isItPalindrome("aha"))

// Dokážeš vymyslet i řešení i bez použití built-in funkcí JS (reverse(), joint()) pomocí vlastního cyklu?