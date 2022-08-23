const container = document.getElementById("container");
const btn = document.getElementById('pixel-size-btn')

let rowNum = 16;

// let mouseDown = false;
// document.body.onmousedown = function() { 
//   mouseDown = true;
// }
// document.body.onmouseup = function() {
//   mouseDown = false;
// }

function makeGrid() {
  container.innerHTML = '';
  makeRows(rowNum);
  
}

function makeRows(rowNum) {
  for (let i = 0; i < rowNum; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    makeColumns(rowNum, row);
    container.appendChild(row);
  }
}

function makeColumns(rowNum, row) {
  for (let i = 0; i < rowNum; i++) {
    const cell = document.createElement("div");
    cell.addEventListener('mouseover', function() {
      cell.style.backgroundColor = 'red';
    });
    cell.style.height = `${600 / rowNum}px`;
    cell.style.width = `${600 / rowNum}px`;
    cell.classList.add("cell");
    row.appendChild(cell);
  }
}

function pixelSizePrompt() {
  rowNum = Number(prompt('What size pixels do you want? The larger the number the smaller the pixels. Choose a number 0-100.'));
  makeGrid();
}

console.log(rowNum);

makeGrid();
