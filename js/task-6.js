function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  divBoxes.innerHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(newBox);
    size += 10;
  }
};


const inputValue = document.querySelector('input[type="number"]');
const divBoxes = document.querySelector('#boxes');
const divControls = document.querySelector('#controls');
const clickCreate = document.querySelector('[data-create]');
//clickCreate.dataset.create = "create";
const clickDestroy = document.querySelector('[data-destroy]');
//clickDestroy.dataset.destroy = "destroy";


clickCreate.addEventListener('click', () => {
  let amount = parseInt(inputValue.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputValue.value = '';
  }
});

clickDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = '';
});

const containerBox = document.createElement('div');
containerBox.classList.add('container');
containerBox.style.backgroundColor = '#fff';
containerBox.style.width = '534px';

document.body.insertAdjacentElement("afterend", containerBox);
containerBox.append(divControls, divBoxes);









