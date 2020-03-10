'use strict';

console.log('hola');

const numberEl = document.querySelector('#guess-number');
const buttonEl = document.querySelector('#button-try');

const hintEl = document.querySelector('.hint');
const attempsEl = document.querySelector('.attemps-number');

let numberAttemps = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function updateElements() {
    // event.preventDefault()
    if (numberEl.value === randomNumber) {
        hintEl.innerHTML = `¡¡¡Has ganado, campeona!!!`;
        attempsEl.innerHTML = numberAttemps += 1;
        console.log('¡¡¡Has ganado, campeona!!!');
    } else if (numberEl.value > randomNumber) {
        hintEl.innerHTML = 'Demasiado alto.';
        console.log('Demasiado alto.');
        attempsEl.innerHTML = numberAttemps += 1;
    } else if (numberEl.value < randomNumber) {
        hintEl.innerHTML = 'Demasiado bajo.';
        console.log('Demasiado bajo.');
        attempsEl.innerHTML = numberAttemps += 1;
    }
}




buttonEl.addEventListener('click', updateElements);