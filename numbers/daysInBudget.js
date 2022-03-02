// Napište funkci pro výpočet počtu pracovních dnů při pevně daném rozpočtu.
// Funkce bude přijímat rozpočet zaměstnavatele a hodinovou sazbu pracovníka
// a vrátí maximální počet dní po které si může zaměstnavatel pracovníka dovolit, když počítáme s 8hodinovou pracovní dobou.
// Vstup: 20000, 89, Výstup: 28

function daysInBudget (budget, hourlyRate) {
    return Math.floor(budget/ (hourlyRate * 8))
}

console.log(daysInBudget(20600, 89))