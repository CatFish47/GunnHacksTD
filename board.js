class Tile {
  constructor(x, y) {
    this.wall = false;
    this.tile = new Image();
    this.tile.src = "/images/empty.png";
    this.border = new Image();
    this.border.src = "/images/empty.png";
    this.unit = null;
    this.x = x;
    this.y = y;
  }

  placeWall() {
    this.wall = true;
    this.tile.src = "/images/WALl.png"; // Change the image of tile to a wall
  }

  placeUnit(unit) {
    this.unit = unit;
  }

  highlight() {
    this.border.src = "/images/tileBorder.png"
  }

  unhighlight() {
    this.border.src = "/images/empty.png";
  }
}

class Board {
  constructor(x, y) {
    this.board = [];
    for (var row = 0; row < x; row++) {
      this.board.push([]);

      for (var col = 0; col < y; col++) {
        this.board[row].push(new Tile(row, col));
      }
    }

    this.entrance = new Tile(Math.floor(x/2), 0);
    this.exit = new Tile(Math.floor(x/2), y - 1);

    this.image = new Image();
    this.image.src = "/images/gridBorder.png";
  }

  solveMaze() {
    var counter = 0;
    var maze = [];

    for (var row = 0; row < this.board.length; row++) {
      maze.push([]);
      for (var col = 0; col < this.board[row].length; col++) {
        maze[row].push(-100);
      }
    }

    for (var row = 1; row < maze.length- 1; row++) {
      for (var col = 1; col < maze[row].length - 1; col++) {
        if (!this.board[row][col].wall) {
          maze[row][col] = -1;
        } else {
          maze[row][col] = -100;
        }
      }
    } // Setup the board so the crap is all ready

    maze[this.entrance.x][this.entrance.y] = 0;
    maze[this.exit.x][this.exit.y] = -1;

    while (counter < 225) {
      for (var row = 0; row < maze.length; row++) {
        for (var col = 0; col < maze[row].length; col++) {
          if (maze[row][col] == counter) {
            var tiles = this.checkSurroundingTilesSetup(row, col, counter, maze);

            for (var i in tiles) {
              maze[tiles[i].x][tiles[i].y] = counter + 1;
            }
          }
        }
      }

      counter++;
    }

    // // Start from the end to the
    var route = [];
    var counter = maze[this.exit.x][this.exit.y];

    route.push(this.board[this.exit.x][this.exit.y]);

    while (true) {
      var x = route[route.length - 1].x;
      var y = route[route.length - 1].y;

      counter--;
      route.push(this.checkSurroundingTilesSolve(x, y, counter, maze));

      if (counter <= 0) {
        break;
      }
    }

    return route.reverse();
  }

  checkSurroundingTilesSetup(x, y, counter, maze) { // Helps the solveMaze() function
    var tiles = [];

    if (maze[x][y-1] == -1) {tiles.push(new Tile(x,y-1));}
    if (maze[x+1][y] == -1) {tiles.push(new Tile(x+1,y));}
    if (maze[x][y+1] == -1) {tiles.push(new Tile(x,y+1));}
    if (maze[x-1][y] == -1) {tiles.push(new Tile(x-1,y));}

    return tiles;
  }

  checkSurroundingTilesSolve(x, y, counter, maze) {
    if (maze[x][y-1] == counter) {return this.board[x][y-1];}
    if (maze[x+1][y] == counter) {return this.board[x+1][y];}
    if (maze[x][y+1] == counter) {return this.board[x][y+1];}
    if (maze[x-1][y] == counter) {return this.board[x-1][y];}

    return 0;
  }
}
