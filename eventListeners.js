document.getElementById("board").addEventListener("mousemove", function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

document.getElementById("board").addEventListener("mousemove", function(e) {
  for (var row = 1; row < board.board.length - 1; row++) {
    for (var col = 1; col < board.board[row].length - 1; col++) {
      if (mouseX > boardTopLeft.x + (1 + 40 * (row + 3)) &&
          mouseX < boardTopLeft.x + (1 + 40 * (row + 4)) &&
          mouseY > boardTopLeft.y + (1 + 40 * (col - 1)) &&
          mouseY < boardTopLeft.y + (1 + 40 * (col))) {
        board.board[row][col].highlight();
      } else {
        board.board[row][col].unhighlight();
      }
    }
  }
})

document.addEventListener("click", function(e) {
  for (var row = 1; row < board.board.length - 1; row++) {
    for (var col = 1; col < board.board[row].length - 1; col++) {
      if (mouseX > boardTopLeft.x + (1 + 40 * (row)) &&
          mouseX < boardTopLeft.x + (1 + 40 * (row + 1)) &&
          mouseY > boardTopLeft.y + (1 + 40 * (col - 1)) &&
          mouseY < boardTopLeft.y + (1 + 40 * (col)))
      {
        board.board[row][col].place(storedUnit);
        recalculateRoute();
      }
    }
  }
})
