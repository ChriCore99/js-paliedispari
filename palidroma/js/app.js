// dire all'utente di inserire una parola

const parolaUtente = prompt('inserisci una parola');
console.log(parolaUtente);

let array = [];

for(let i = 0; i < parolaUtente.length; i++){
    const arrayIndex = parolaUtente[i];
    array.push(arrayIndex);
}
console.log(array);

let arrayInverso = [];

for(let i = parolaUtente.length - 1; i >= 0; i--){
    const arrayInversoIndex = parolaUtente[i];
    arrayInverso.push(arrayInversoIndex);
}
console.log(arrayInverso);

// creare una funzione per vedere se la parola inserita è palindroma

function palindromo(array, arrayInverso){
    let risultato;
    //  ottenere come ritorno true se è palindroma e false se non lo è 
    for(let i = 0; i < array.length; i++){

        if(array[i] === arrayInverso[i]){
            risultato = true;
        } else {
            risultato = false;
        }
    }

    // stamapre in console un messaggio per avvisare se è palindorma o no 
    if(risultato === true){
        console.log('la parola è palindroma, true');
    } else {
        console.log('la parla non è palindroma, false');
    }

    return risultato;
}

const rispostaFinale = palindromo(array, arrayInverso);

