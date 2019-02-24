var c = 0;
var startWaves;

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
