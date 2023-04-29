 // creo la variabile che conterrà il risultato
 // creo un oggetto cojtenente i numeri romani e i loro rispettivi valori
 // ciclo l'oggetto romanNumList
 // eseguo un ciclo fino a quando la sottrazione del numero e del valore corrente è maggiore o uguale a zero
 // aggiungo il simbolo corrispondente alla variabile numeriRomani
 // sottrggo il valore corrispondente dal numero
 // return del risultato

 function convertiNumeroInRomano(numero) {
 
    let numeriRomani = '';
  
    const romanNumList = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
  
    for (let key in romanNumList) {
    while (numero >= romanNumList[key]) {
    numeriRomani += key;
    numero -= romanNumList[key];
    }
    }
    return numeriRomani;
  }
  
  
   console.log(convertiNumeroInRomano(51))
   console.log(convertiNumeroInRomano(47))