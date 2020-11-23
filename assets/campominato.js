// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati ??
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Faccio generare 16 numeri casuali tra 1 e 100

var pcNumber= [];
for (var i = 0; i < 16; i++){
    pcNumber.push(Math.floor(Math.random() * (100 - 1) + 1));
}
console.log(pcNumber); 

// Chiedo all'utente di inserire un numero compreso tra 1 e 100, se il numero non è presente all'interno dell'array pcNumber, allora continuo a chiedere un numero fino un massimo di tot.


var userNumber = prompt("Inserisci un numero compreso tra 1 e 100");
var numberToCheck = [];
var found = false;
for (var j=0; j<pcNumber.length; j++) {
    numberToCheck.push(Number(userNumber));
    if(numberToCheck > 100){
        alert("You have insered a wrong value");
         break;
     }else if (pcNumber[j]==numberToCheck){
        found = true;
        alert("You Win");
        break;
     } 
}

console.log(numberToCheck)