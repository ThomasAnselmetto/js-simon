// Traccia

// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9: 30 di domani mattina!

//     Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno ?
//     Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto ?
//     Da quanti millisecondi è composto un secondo ?
//     Quanti millisecondi mi separano da domani alle 9: 30 ?
//     Esiste un oggetto JS in grado di gestire le date ?
//     Esistono dei metodi per trasformare una data in millisecondi ?

// collego gli elementi html alle mie variabili

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// creo una variabile che contenga i miei secondi ed evoco la funzione ad inizio codice per far si che inizi il conteggio al refresh della pagina del browser

let totalSeconds = 0
MyInterval()

const clock = setInterval(MyInterval, 1000);

// esercizio per capire se ho capito il meccanismo
function MyInterval() {
    if (totalSeconds >= 0) {

        const seconds = totalSeconds % 60;
        const minutes = parseInt((totalSeconds / 60) % 60);
        const hours = parseInt((totalSeconds / 60 / 60) % 24);
        const days = parseInt((totalSeconds / 60 / 60 / 24));
        console.log(seconds);
        console.log(minutes);
        console.log(hours);
        console.log(days);
        totalSeconds++;
    }
}