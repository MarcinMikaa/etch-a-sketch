const container = document.querySelector('#gridContainer');

const btnClear = document.querySelector('#clearBtn');

btnClear.addEventListener('click', () => clearGrid());

function createGridOfSquares(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    container.appendChild(newDiv);
  }
}

function changeColorOfDiv() {
  if (!this.classList.contains('mouseover')) {
    this.classList.add('mouseover');
  }
}

function clearGrid() {
  squares.forEach((square) => {
    square.classList.remove('mouseover');
  });
}

createGridOfSquares(256);

const squares = document.querySelectorAll('.box');

squares.forEach((square) => {
  square.addEventListener('mouseover', changeColorOfDiv);
});
