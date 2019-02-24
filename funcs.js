var c = 0;

function recalculateRoute() {
  route = board.solveMaze();
}

function spawnEnemy() {
  if (c < waves[wave].length) {
    enemiesOnField.push(waves[wave][c]);
  }

  c++;

  console.log(enemiesOnField)
}

function startNextWave() {
  c = 0;
  wave++;

  setInterval(spawnEnemy, 500);
}
