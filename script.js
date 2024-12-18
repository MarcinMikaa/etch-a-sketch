const container = document.querySelector('#gridContainer');
const btnClear = document.querySelector('#clearBtn');
const btnEraser = document.querySelector('#eraseBtn');
const btnDraw = document.querySelector('#drawBtn');
const colorPicker = document.querySelector('#colorPicker');
const gridSizeRange = document.querySelector('#gridSizeRange');
const gridSizeValue = document.querySelector('#gridSizeValue');

let isMouseDown = false;
let currentMode = 'draw';
let currentColor = '#000000';

btnClear.addEventListener('click', clearGrid);
btnDraw.addEventListener('click', () => updateMode('draw'));
btnEraser.addEventListener('click', () => updateMode('erase'));
colorPicker.addEventListener('input', () => (currentColor = colorPicker.value));
gridSizeRange.addEventListener('input', updateGrid);
container.addEventListener('mousedown', onMouseDown);
container.addEventListener('mouseover', onMouseOver);
container.addEventListener('mouseup', () => (isMouseDown = false));

function createGrid(gridSize) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('box');
    container.appendChild(square);
  }
}

function onMouseDown(e) {
  if (e.target.classList.contains('box')) {
    isMouseDown = true;
    applyColor(e.target);
  }
}

function onMouseOver(e) {
  if (isMouseDown && e.target.classList.contains('box')) {
    applyColor(e.target);
  }
}

function applyColor(square) {
  square.style.backgroundColor = currentMode === 'erase' ? '' : currentColor;
}

function updateMode(mode) {
  currentMode = mode;

  btnDraw.classList.remove('active');
  btnEraser.classList.remove('active');

  if (mode === 'draw') {
    btnDraw.classList.add('active');
  } else {
    btnEraser.classList.add('active');
  }
}

function clearGrid() {
  const squares = document.querySelectorAll('.box');
  squares.forEach((square) => {
    square.style.backgroundColor = '';
  });
}

function updateGrid() {
  const gridSize = gridSizeRange.value;
  gridSizeValue.textContent = `${gridSize} x ${gridSize}`;
  createGrid(gridSize);
}

createGrid(16);
