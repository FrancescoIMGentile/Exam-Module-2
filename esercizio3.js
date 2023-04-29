// 1. Creare una mappa con le lettere romane e i loro valori corrispondenti
// 2. Creare una funzione che prenda un intero come argomento
// 3. Creare una variabile stringa vuota per memorizzare il risultato
// 4. Iterare attraverso la mappa per vedere quale lettera romana ha un valore più vicino al numero passato comeargomento
// 5. Se il numero passato come argomento è maggiore o uguale al valore della lettera romana nella mappa, aggiungere la lettera romana corrispondente alla variabile result
// 6. Sottrarre il valore della lettera romana dal numero passato come argomento
// 7. Ripetere i passaggi finché il numero passato come argomento non è uguale a 0
// 8. Restituire il risultato

const numRomani = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
function converterNumRoman(num) {
  
  let result = '';
  for (let key in numRomani) {
    if (num >= numRomani[key]) {
      result += key;
      num -= numRomani[key];
    }
  }
  return result;

}
  
console.log(converterNumRoman(165))