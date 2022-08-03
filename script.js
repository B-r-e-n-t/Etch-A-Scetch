const container = document.getElementById("container");

function makeGrid() {
  makeRows(16);
}

function makeRows(rowNum) {
  for (let i = 1; i < rowNum; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    makeColumns(16, row);
    container.appendChild(row);
    console.log("makeColumns" + i);
  }
}

function makeColumns(rowNum, row) {
  for (let i = 1; i < rowNum; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
    console.log("makeColumns" + i);
  }
}

makeGrid();
