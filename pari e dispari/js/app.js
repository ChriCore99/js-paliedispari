//  chiedere all'utente di scegnlere tra pari o dispari

const scelta = prompt('sarà pari o dispari?');
console.log(scelta);

// inserisci un numero da 1 a 5 

const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log('numero utente:', numeroUtente);

// generiamo un numero random tra 1 e 5

const numeroRandom = parseInt(Math.floor(Math.random() * 5));
const aggiunta = 1;

function numeroCreato(numeroRandom, aggiunta){
    const risultato = numeroRandom + aggiunta;
    return risultato;
}

const somma = numeroCreato(numeroRandom, aggiunta);
console.log('numero sommato', somma);

// sommiamo il numero random e il numero dell'utente

let numeroFinale = (numeroUtente + somma); 
console.log(numeroFinale);

// stabilire con una funzione se il numero è pari o dispari

function sePari(){
   const resto = numeroFinale % 2;
   return resto;
}

// dichiariamo chi ha vinto

if(sePari() === 0 && scelta === 'pari'){
    console.log('hai vinto la partita');
} else if(sePari() !== 0 && scelta === 'dispari'){
    console.log('hai vinto la partita');
} else {
    console.log('hai perso, ritenta');
}

