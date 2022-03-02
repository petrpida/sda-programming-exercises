// Napište funkci pro výpočet denní sazby vzhledem k hodinové sazbě.
// Funkce bude přijímat hodinovou sazbu pracovníka a vrátí cenu pracovníka za den, když počítáme s 8hodinovou pracovní dobou.
// Vstup: 89, Výstup: 712

function countDailyRate (hourlyRate) {
    return hourlyRate * 8
}

console.log(countDailyRate(89))