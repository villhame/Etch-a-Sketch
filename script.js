
// script.js
const gridContainer = document.querySelector('.Grid')

// const slider = document.getElementsByClassName('slider');
// const sliderValue = document.getElementsByClassName('sliderValue');

// // Function to update the value display span
// function updateSliderValue() {
//     sliderValue.textContent = slider.value;
// }

// // Add an event listener to the slider input
// slider.addEventListener('input', updateSliderValue);

// Initial update of the value display


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
updateSliderValue();



