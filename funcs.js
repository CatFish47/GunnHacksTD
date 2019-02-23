function recalculateRoute() {
  route = board.solveMaze();

  for (var row in board.board) {
    for (var col in board.board[row]) {
      if (board.board[row][col].tile.src == "http://gunnhacks.com/img/logo.png") {
        board.board[row][col].tile.src = "";
      }
    }
  }

  for (var i in route) {
    route[i].tile.src = "http://gunnhacks.com/img/logo.png";
  }
}
