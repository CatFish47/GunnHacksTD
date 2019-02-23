function init() {
  drawGrid();

  //recalculateRoute();
  for (var i in route) {
    route[i].tile.src = "/images/grid.png";
  }

  window.requestAnimationFrame(animate);
}

function drawTiles() {
  for (var row = 1; row < board.board.length - 1; row++) {
    for (var col = 1; col < board.board[row].length - 1; col++) {
      context.drawImage(board.board[row][col].tile, boardTopLeft.x + (1 + 40 * (row - 1)), boardTopLeft.y + (1 + 40 * (col - 1)), 39, 39);
      context.drawImage(board.board[row][col].border, boardTopLeft.x + (1 + 40 * (row - 1)), boardTopLeft.y + (1 + 40 * (col - 1)), 41, 41);
    }
  }
}

function drawGrid() {
  context.drawImage(board.image, boardTopLeft.x, boardTopLeft.y, 601, 601);
  drawTiles();
}

function draw() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);

  drawGrid();

  return 0;
}

function update() {

}

function animate() {
  update();

  if (draw() == 0) {
    window.requestAnimationFrame(animate);
  }
}

init();
