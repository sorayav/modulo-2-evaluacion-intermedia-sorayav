'use strict';

console.log('hola');

const numberEl = document.querySelector('#guess-number');
const buttonEl = document.querySelector('#button-try');
const hintEl = document.querySelector('.hint');
const attempsEl = document.querySelector('.attemps-number');

let numberAttemps = 0;

let maxValue = 100;
let minValue = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

attempsEl.innerHTML = numberAttemps;

// Es preferible empezar por el error.
function updateElements() {
    const inputNumber = parseInt(numberEl.value);
    if (inputNumber === randomNumber) {
        hintEl.innerHTML = `¡¡¡Has ganado, campeona!!!`;
        attempsEl.innerHTML = numberAttemps += 1;
        console.log('¡¡¡Has ganado, campeona!!!');
        btnReset.classList.remove('hidden');
    } else if (inputNumber > randomNumber && inputNumber <= maxValue) {
        hintEl.innerHTML = 'Demasiado alto.';
        console.log('Demasiado alto.');
        attempsEl.innerHTML = numberAttemps += 1;
    } else if(inputNumber < randomNumber && inputNumber > minValue) {
        hintEl.innerHTML = 'Demasiado bajo.';
        console.log('Demasiado bajo.');
        attempsEl.innerHTML = numberAttemps += 1;
    } else {
        hintEl.innerHTML = 'El número debe estar entre 1 y 100.';
        console.log('El número debe estar entre 1 y 100.');
    }
}
buttonEl.addEventListener('click', updateElements);

// Reset button
const btnReset = document.querySelector('.reset');

// const formReset = () => {document.querySelector('#form').reset()};

function formReset() {
    document.querySelector('#form').reset()
} 

function resetHandler () {
    formReset();
    updateElements();
} 

btnReset.addEventListener('click', resetHandler);