// Napište funkci, která použije algoritmus Bubble Sort pro seřazení prvku v polu.
// Poznámka:  Bubble sort, někdy označovaný jako sinking sort, je jednoduchý třídicí algoritmus, který funguje tak, 
// že opakovaně prochází seznam, který má být seřazen, porovnává každou dvojici sousedních položek a vyměňuje je, 
//pokud jsou v nesprávném pořadí. Více: https://www.algoritmy.net/article/3/Bubble-sort
// Ukázka pole : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213].
// Očekávaný výstup : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1].

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
    
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j+1]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
        }
    }
    return array
}

let nums = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

console.log(bubbleSort(nums))