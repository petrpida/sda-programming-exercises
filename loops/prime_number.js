// Napište funkci, která jako parametr přijme číslo a ověří, zda je číslo prvočíslo, nebo ne.
// Poznámka : Prvočíslo (nebo také prvočíslo) je přirozené číslo větší než 1, které nemá jiné kladné dělitele než 1 a samo sebe.

function isItPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (Number.isInteger(num/i)) {
            console.log(`Number ${num} is not prime number, we can divide it by number ${i}`)
            return false
        } 
    }
    console.log(`Number ${num} is prime number`)
    return true
}

console.log(isItPrimeNumber(101))