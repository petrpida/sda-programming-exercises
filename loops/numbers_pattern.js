// Napište funkce printPattern() slouží k vypsání následujícího vzoru pro daný rozsah pomocí vnořené smyčky for.
// Vstup: 8
// Výstup:
/* 
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8 
*/

function printPattern(num) {
    for (let i = 1; i <= num; i++) {
        let array = []

        for (let j = 1; j <= i; j++) {
            array.push(j)
        }
        console.log(array.join(" "))
    }
}

printPattern(8)