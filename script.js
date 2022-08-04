const container = document.getElementById("container");
const cell = document.createElement("div");
cell.classList.add("cell");

function makeGrid() {
  makeRows(16);
}

function makeRows(rowNum) {
  for (let i = 1; i < rowNum; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    makeColumns(16, row);
    container.appendChild(row);
  }
}

function makeColumns(rowNum, row) {
  for (let i = 1; i < rowNum; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
}

makeGrid();

function pixelSizePrompt() {
  let pixelSize = prompt(
    "What size pixels do you want? The larger the number the small the pixels."
  );
  alert(pixelSize);
}

function draw() {
  document.getElementsByClassName("cell");
  cell.style.backgroundColor = "red";
}
document.addEventListener("click", draw);
