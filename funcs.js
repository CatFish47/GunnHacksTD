var c = 0;
var startWaves;
var speed = 1;

function recalculateRoute() {
  route = board.solveMaze();
}

function spawnEnemy() {
  if (c < waves[wave].length) {
    enemiesOnField.push(waves[wave][c]);
  } else {
    clearInterval(startWaves);
  }

  c++;
}

function startNextWave() {
  c = 0;
  wave++;

  startWaves = setInterval(spawnEnemy, 1000);
}

function doubleSpeed() {
  if (speed == 1) {
    speed = 2;
  } else if (speed == 2) {
    speed = 1;
  }
}
