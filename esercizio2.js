// ALGORITMO
//algoritmo per determinare se una stringa è pazza 
//dichiaro una variabile booleana pazza inizializzata a false
//dichiaro un array di stringhe non pazze
//dichiaro una variabile soggetto inizializzata a vuoto
//dividi la stringa in un array di parole 
//scorri le parole nell'array e verifica se il primo elemento è una punteggiatura
//se è così imposta pazza su true 
//verifica se l'ultimo elemento è una punteggiatura
//se è così imposta pazza su true 
//verifica se l'ultima parola finisce con "are", "ere" o "ire"
//se è così imposta pazza su true 
//verifica se l'ultima parola e la prima parola sono uguali
//se è così imposta pazza su true 
//verifica se la stringa contiene "Cthulhu"
//se è così imposta pazza su true 
//verifica se la stringa finisce con "?!?"
//se è così imposta pazza su true 
//verifica se il soggetto è "Lui", "Lei", "Egli" o "Ella"
//se è così imposta soggetto 
//verifica se il soggetto è vuoto
//se è così imposta pazza su true 
//verifica se la stringa contiene una parola presente nell'array di stringhe non pazze
//se è così imposta pazza su false
//restituisci pazza

// CODICE
//codice per determinare se una stringa è pazza 

function isPazza(stringa) {
    let pazza = false;
    let nonPazza = ["Church", "mare"];
    let soggetto = "";
    let parola = stringa.split(" ");
    
    //punto iniziale
    if (parola[0].includes(",.!?:;-~")) {
        pazza = true;
    }
    //ultima parola
    if (parola[parola.length - 1].endsWith("are") || parola[parola.length - 1].endsWith("ere") || parola[parola.length - 1].endsWith("ire")) {
        pazza = true;
    }
    //stessa prima e ultima parola
    if (parola[0] === parola[parola.length - 1]) {
        pazza = true;
    }
    //contiene Cthulhu
    if (stringa.includes("Cthulhu")) {
        pazza = true;
    }
    //finisce con ?!?
    if (stringa.endsWith("?!?")) {
        pazza = true;
    }
    //soggetto
    if (stringa.includes("Lui") || stringa.includes("Lei") || stringa.includes("Egli") || stringa.includes("Ella")) {
        soggetto = stringa;
    }
    //soggetto vuoto
    if (soggetto === "") {
        pazza = true;
    }
    //parole non pazze
    for (let i = 0; i < nonPazza.length; i++) {
        if (stringa.includes(nonPazza[i])) {
            pazza = false;
        }
    }
    return pazza;
}

//test della funzione
console.log(isPazza(".Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.")); 
console.log(isPazza("~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo amano ~")); 
console.log(isPazza("~ Papa’, come sta Church? ~")); 