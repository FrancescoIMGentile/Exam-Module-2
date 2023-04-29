// Divido la stringa in linee
// Creo un array vuoto per i risultati
// Creo una variabile per la somma dei risultati
// Creo una variabile per il nome del reparto
// Ciclo l'array di linee
// Controllo se la linea corrente è un nome di reparto
// Salvo il nome del reparto corrente
// Aggiungo un elemento vuoto all'array dei risultati
// Se non è un nome di reparto, allora è un numero
// Aggiungo il numero alla somma
// Aggiungo la somma all'elemento corretto dell'array dei risultati
// Ordino in base allo spesa
// Ritorno l'array dei risultati

function trovaReparti(str) {
    
    let linee = str.split('\n');
    let risultati = [];
    let somma = 0;
    let repartoAttuale;
  
   linee.forEach(linea => {
      
    if (linea.trim() === '') return;
    if (isNaN(linea)) {
        
    repartoAttuale = linea;
    risultati.push({
    reparto: repartoAttuale,
    spesa: 0
    });
    } else {
    somma += parseInt(linea);
    risultati[risultati.length - 1].spesa = somma;
    }
    });

    risultati.sort((a, b) => {
      return b.spesa - a.spesa;
    });

    return risultati;
  }
  
  console.log(trovaReparti(`
  Cancelleria
  500
  40
  60
  
  Servizi igenici
  1000
  1
  200
  
  Vendite
  0
  
  `))
  