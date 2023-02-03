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


const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
let seconds = 0
MyInterval()

const clock = setInterval(MyInterval, 1000);


function MyInterval() {
    if (seconds < 10) {
        secondsEl.innerHTML = "0" + seconds;
    } else

        seconds++;
};