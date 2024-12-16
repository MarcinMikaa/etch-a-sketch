const container = document.querySelector('#container');

function createGridOfSquares(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    container.appendChild(newDiv);
  }
}

createGridOfSquares(256);
