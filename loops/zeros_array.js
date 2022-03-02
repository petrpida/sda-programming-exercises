// Implementujte funkci, která vytvoří a vrátí pole o velikosti n obsahující, kde každým prvkem je číslo 0 
// a n je číselný parametr této funkce.

function createArray(num) {
    let array = []
    for (let i = 0; i < num; i++) {
        array.push(0)
    }
    return array
}

console.log(createArray(5))