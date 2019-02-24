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
    player.money += (wave + 1) * (wave + 1) + 100; // Change with nico's equation
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

function addMoney(n) {
  player.money += n;
}

function setWave(n) {
  wave = n;
}

function addLives(n) {
  player.lives += n;
}
