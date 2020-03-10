'use strict';

console.log('hola');

const numberEl = document.querySelector('#guess-number');
const buttonEl = document.querySelector('#button-try');

const hintEl = document.querySelector('.hint');
const attempsEl = document.querySelector('.attemps-number');

let numberAttemps = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    console.log('')
}

function updateElements() {
    const randomNumber = getRandomNumber(100);

    if (numberEl.value === randomNumber) {
        hintEl.innerHTML = `¡¡¡Has ganado, campeona!!!`;
        attempsEl.innerHTML = numberAttemps += 1;
        console.log('win');
    } 
    else if (randomNumber < numberEl.value) {
        hintEl.innerHTML = 'Demasiado alto.';
        console.log('not win');
        attempsEl.innerHTML = numberAttemps += 1;
    }
    else if (randomNumber > numberEl.value) {
        hintEl.innerHTML = 'Demasiado bajo.';
        console.log('not win');
        attempsEl.innerHTML = numberAttemps += 1;
    }
}

buttonEl.addEventListener('click', updateElements);