const container = document.getElementById("container");

function makesGrid() {
  makesRows();
  makesColumns();
}

function makesRows(rowNum) {
  for (let i = 1; i < rowNum; i++) {
    container.appendChild(cell);
  }
}

function makesColumns(rowNum) {
  for (let i = 1; i < rowNum; i++) {
    container.appendChild(cell);
  }
}
