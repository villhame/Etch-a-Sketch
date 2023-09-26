
// script.js
const gridContainer = document.querySelector('.Grid')

function createGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const Cell = document.createElement('div');
      Cell.classList.add('Cell');
      //Cell.textContent = `${i + 1}, ${j + 1}`;
      gridContainer.appendChild(Cell);
    }
  }
}

createGrid(16, 16);


