var c = 0;
var startWaves;
var speed = false;

function recalculateRoute() {
  route = board.solveMaze();
}

function spawnEnemy() {
  if (c < waves[wave].length) {
    enemiesOnField.push(waves[wave][c]);
  } else {
    clearInterval(startWaves);
    startWaves = 0;
  }

  c++;
}

function startNextWave() {
  c = 0;
  wave++;

  startWaves = setInterval(spawnEnemy, 1000);
}

function unitAttack(unit) {
  //board.board[row][col].unit.attack();
}

function isValid(tile) {
  tile.placeWall();

  if (board.solveMaze()[0] == 0) {
    tile.wall = false;
    tile.tile.src = "";
    return false;
  } else {
    return true;
  }
}
