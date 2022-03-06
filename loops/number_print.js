// Implementujte dvě funkce.
// Každá bude přijímat parametry min, max, descending.
// Min, max jsou čísla a descending pravdivostní hodnota.
// Obě funkce vypíšou všechna čísla v rozmezí čísel min a max.
// Pokud parametr descending je roven true, pak tato čísla budou vypsána v sestupném pořadí.
// První funkce vypíše čísla pomocí cyklu for a druhá pomocí cyklu while.

function printNumbers(min, max, descending) {
  if (!descending === true) { // Lze zapsat pouze pomocí if (!descending)
    for (let i = min; i <= max; i++) {
      console.log(i);
    }
  } else {
    let index = max;
    while (index >= min) {
      console.log(index);
      index--;
    }
  }
}

printNumbers(2, 12, false);
