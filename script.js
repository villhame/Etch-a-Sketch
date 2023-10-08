
// script.js
const gridContainer = document.querySelector('.Grid');
const slider = document.getElementById('myRange');
const sliderValue = document.querySelector('.SliderValue');
const resetButton = document.getElementById('Reset');
const Colour = document.getElementById('Colour');
const Black = document.getElementById('Black');
let bColour = 'black'

// Flag to track whether the mouse button is pressed
let isMousePressed = false;

// Function to create or update the grid based on the slider value
function updateGridSize() {
  const gridSize = parseInt(slider.value);
  sliderValue.textContent = `${gridSize} x ${gridSize}`;

  // Clear the current grid
  gridContainer.innerHTML = '';

  // Create the new grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('Cell');
    gridContainer.appendChild(cell);

    // Add event listeners for coloring on click and drag
    cell.addEventListener('mousedown', () => {
      isMousePressed = true;
      cell.style.backgroundColor = bColour; // You can change the color
    });

    cell.addEventListener('mouseover', () => {
      if (isMousePressed) {
        cell.style.backgroundColor = bColour; // You can change the color
      }
    });
  }

  // Add a mouseup event listener to the document to stop coloring on mouseup
  document.addEventListener('mouseup', () => {
    isMousePressed = false;
  });

  // Update the CSS to maintain square cells
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

// Function to reset the grid to white
function resetGrid() {
  const cells = document.querySelectorAll('.Cell');
  cells.forEach((cell) => {
    cell.style.backgroundColor = 'white';
  });
}

// Function to color a cell with a random color
function colorCell(cell) {
  const randomColor = getRandomColor();
  cell.style.backgroundColor = randomColor;
}


Black.addEventListener('click', () => {
  bColour = 'black'
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

Colour.addEventListener('click', () => {
  bColour = getRandomColor();

});

// Add an event listener to the slider input
slider.addEventListener('input', updateGridSize);

// Add an event listener to the reset button
resetButton.addEventListener('click', resetGrid);

// Initialize the grid with the default value
updateGridSize();
