class Tile {
  constructor(x, y) {
    this.wall = false;
    this.image = new Image();
    this.image.src = "";
    this.unit = null;
    this.x = x;
    this.y = y;
  }

  placeWall() {
    this.wall = true;
    this.image.src = ""; // Change the image of tile to a wall
  }
}

class Board {
  constructor(x, y) {
    this.board = [];
    for (var row = 0; row < x; row++) {
      for (var col = 0; col < y; col++) {
        this.board[row][col] = new Tile(row, col);
      }
    }

    this.entrance = {
      x: Math.ceil(x/2),
      y: 0
    }

    this.exit = {
      x: Math.ceil(x/2),
      y: y - 1
    }
  }

  solveMaze() {

  }
}
