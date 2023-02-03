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

const countDownDate = new Date("Feb 6, 2023 09:30:00").getTime();
console.log(countDownDate);

// se non ho capito male mi da i millisecondi dal 1-1-1970

let totalSeconds = 0
boleanersCountDown()

const counter = setInterval(boleanersCountDown, 1000);

// esercizio per capire se ho capito il meccanismo
function boleanersCountDown() {

    const now = new Date().getTime();
    let gapDiDate = countDownDate - now;

    ++totalSeconds;
    
    
    let days = Math.floor(gapDiDate / (1000 * 60 * 60 * 24));
    daysEl.innerHTML = (days < 10) ? "0" + days : days;
     let hours = Math.floor((gapDiDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
     let minutes = Math.floor((gapDiDate % (1000 * 60 * 60)) / (1000 * 60));
    minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
     let seconds = Math.floor((gapDiDate % (1000 * 60)) / 1000);
    secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;





}
    
    
    
    
    
    // in secondsEl se i secondimin ecc sono inferiori a 10 stamperai o e secondi,min ecc diversamente stamperai solo seconds,min ecc
    
    // secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    // minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    // hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    // daysEl.innerHTML = (days < 10) ? "0" + days : days;
    
    
    




// const seconds = totalSeconds % 60;
// const minutes = parseInt((totalSeconds / 60) % 60);
// const hours = parseInt((totalSeconds / 60 / 60) % 24);
// const days = parseInt((totalSeconds / 60 / 60 / 24));