// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati ??
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

//******************************************************** */
var difficoltà = Number(prompt("Inserisci un numero da 0 a 2 per selezionare la difficoltà")); 
switch (difficoltà) {
    case 0:
        difficoltà = 100;
        alert("Easy");
        break;
    case 1:
        difficoltà = 80;
        alert("Medium");
        break;
    case 2:
        difficoltà = 50;
         alert("Hard");
        break;
    default :      
        alert("Inserisci la dificoltà");
        break;
}

console.log(difficoltà);
//******************************************************** */
// Faccio generare 16 numeri casuali tra 1 e 100

function random(min, max){
    return Math.floor(Math.random() * (max-min +1) ) +min;
}
var pcNumber = [];
//******************************************************** */
// QUESTO MI PERMETTE DI CONTROLLARE CHE NON CI SIANO DOPPIONI  ALL'INTERNO DELL'ARRAY, E DI GENERARE 16 NUMERI.
while(pcNumber.length !== 16){
    var number = random(1, 100);
    if(! inArray(pcNumber, number)) {  // Se la condizione è falsa allora pusha il numero nell'array.
        pcNumber.push(number);
    }
}
console.log(pcNumber);
//******************************************************** */
// Ricercare un numero all'interno di un array
function inArray (array, number){
    var i = 0;
    while ( i < array.length){
        if (number === array[i]){     
            return true;
        }
        i++;
    }
}
//******************************************************** */

// Chiedo all'utente di inserire un numero compreso tra 1 e 100, se il numero non è presente all'interno dell'array pcNumber, allora continuo a chiedere un numero fino un massimo di tot.

// Se l'utente inserisce lo stesso numero 2 volte, lo inserisco all'interno di numeroVietato, e lo sottraggo al punteggio finale.

var userNumber = [];
var numeroVietato = [];



function askNumber(userNmbrs){
    for (var i=0; i<difficoltà; i++){
        var numeroUtente = Number(prompt("Inserisci un numero da 1 a 100"));
        if (inArray(pcNumber,numeroUtente )){
            console.log("BOMBA");
            break;
        } else if(! inArray(userNumber, numeroUtente)){
            numeroVietato.push(numeroUtente);
        }
        
        while(inArray(userNumber, numeroUtente)){
            alert("Hai gia usato questo numero!")
            numeroUtente = Number(prompt("Inserisci un numero da 1 a 100"));
        }
        userNumber.push(numeroUtente);
    }
}

askNumber();


console.log(userNumber);
console.log(numeroVietato);
console.log("Il tuo punteggio è " + (userNumber.length - numeroVietato.length));