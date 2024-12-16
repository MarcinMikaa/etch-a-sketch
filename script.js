const container = document.querySelector('#gridContainer');
const btnClear = document.querySelector('#clearBtn');
const btnEraser = document.querySelector('#eraserBtn');
const colorPicker = document.querySelector('#colorPicker');
const gridSizeRange = document.querySelector('#gridSizeRange');
const gridSizeValue = document.querySelector('#gridSizeValue');
isMouseDown = false;
let isErasing = false;
let currentColor = '#000000';

btnEraser.addEventListener('click', toggleEraser);
btnClear.addEventListener('click', clearGrid);
colorPicker.addEventListener('input', changeColor);

function createGridOfSquares(gridSize) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    container.appendChild(newDiv);
  }
  const squares = document.querySelectorAll('.box');
  squares.forEach((square) => {
    square.addEventListener('mousedown', startDrawing);
    square.addEventListener('mouseover', drawIfMouseDown);
  });
}

function startDrawing(e) {
  isMouseDown = true;
  changeColorOfDiv.call(e.target);
}

function stopDrawing(e) {
  isMouseDown = false;
}

function drawIfMouseDown(e) {
  if (isMouseDown) {
    changeColorOfDiv.call(e.target);
  }
}

function changeColorOfDiv() {
  if (isErasing) {
    this.style.backgroundColor = '';
  } else {
    this.style.backgroundColor = currentColor;
  }
}

function toggleEraser() {
  isErasing = !isErasing;
  btnEraser.textContent = isErasing ? 'Drawing' : 'Eraser';
}

function changeColor() {
  currentColor = colorPicker.value;
}

function clearGrid() {
  const squares = document.querySelectorAll('.box');
  squares.forEach((square) => {
    square.style.backgroundColor = '';
  });
}

document.addEventListener('mouseup', stopDrawing);
createGridOfSquares(16);

gridSizeRange.addEventListener('input', () => {
  let gridSize = gridSizeRange.value;
  gridSizeValue.textContent = `${gridSize} x ${gridSize}`;
  createGridOfSquares(gridSize);
});
