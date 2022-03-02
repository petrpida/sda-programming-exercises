// Napište funkci fibonacci(n), která vypíše Fibonacciho řadu pro zadaný rozsah n pomocí cyklu while

function fibonacci(n) {
    let sum = 0
    let fibonacchiNumbers = [0, 1]
    let i = 1
    while (i < n) {
        sum = (fibonacchiNumbers[i]) + (fibonacchiNumbers[i-1])
        fibonacchiNumbers.push(sum)
        i++
    }
    return fibonacchiNumbers
}

console.log(fibonacci(10))