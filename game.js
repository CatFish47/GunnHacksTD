function init() {
  drawGrid();

  recalculateRoute();

  route = board.solveMaze();

  window.requestAnimationFrame(animate);
}

function drawTiles() {
  for (var row = 1; row < board.board.length - 1; row++) {
    for (var col = 1; col < board.board[row].length - 1; col++) {
      context.drawImage(board.board[row][col].tile, boardTopLeft.x + (1 + 40 * (row - 1)), boardTopLeft.y + (1 + 40 * (col - 1)), 39, 39);
      context.drawImage(board.board[row][col].border, boardTopLeft.x + (1 + 40 * (row - 1)), boardTopLeft.y + (1 + 40 * (col - 1)), 41, 41);

      if (board.board[row][col].unit) {
        context.drawImage(board.board[row][col].unit.image, boardTopLeft.x + (1 + 40 * (row - 1)), boardTopLeft.y + (1 + 40 * (col - 1)), 41, 41);
      }
    }
  }
}

function drawGrid() {
  context.drawImage(board.image, boardTopLeft.x, boardTopLeft.y, 601, 601);
  drawTiles();
}

function drawMenu() {
  var bg = new Image();
  bg.src = "/images/box.png";

  context.drawImage(bg, 100, 50, 75, 75); // Wall
  var wall = new Wall();
  context.drawImage(wall.image, 100, 50, 75, 75);

  context.drawImage(bg, 100, 130, 75, 75); // Gunner
  var gunner = new Gunner();
  context.drawImage(gunner.image, 100, 130, 75, 75);

  context.drawImage(bg, 100, 210, 75, 75); // Wizard
  var wizard = new Wizard();
  context.drawImage(wizard.image, 100, 210, 75, 75);

  context.drawImage(bg, 100, 290, 75, 75); // Freezer
  var freezer = new Freezer();
  context.drawImage(freezer.image, 100, 290, 75, 75);

  context.drawImage(bg, 100, 370, 75, 75); // Ring of Fire
  var fire = new RingOfFire();
  context.drawImage(fire.image, 100, 370, 75, 75);

  context.drawImage(bg, 100, 450, 75, 75); // Moral Supporter
  var moral = new MoralSupporter();
  context.drawImage(moral.image, 100, 450, 75, 75);
}

function drawEnemies() {
  for (var i in enemiesOnField) {
    context.drawImage(enemiesOnField[i].image, enemiesOnField[i].x - 20, enemiesOnField[i].y - 20, 40, 40);
  }
}

function draw() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);

  drawGrid();
  drawMenu();
  drawEnemies();

  return 0;
}

function unitsAttack() {
  for (var row in board.board) {
    for (var col in board.board[row]) {
      if (board.board[row][col].unit) {
        board.board[row][col].unit.attack();
      }
    }
  }
}

function updateEnemies() {
  updateEnemyTiles();
  moveEnemies();
}

function updateEnemyTiles() {
  var boxSize = 15;
  for (var i in enemiesOnField) {
    for (var row = 0; row < board.board.length - 1; row++) {
      for (var col = 0; col < board.board[row].length - 1; col++) {
        if (enemiesOnField[i].x > boardTopLeft.x + boxSize + (1 + 40 * (row)) &&
            enemiesOnField[i].x < boardTopLeft.x - boxSize + (1 + 40 * (row + 1)) &&
            enemiesOnField[i].y > boardTopLeft.y + boxSize + (1 + 40 * (col - 1)) &&
            enemiesOnField[i].y < boardTopLeft.y - boxSize + (1 + 40 * (col))) {
          enemiesOnField[i].changeTiles(board.board[row + 1][col]);
        }
      }
    }
  }
}

function moveEnemies() {
  for (var i in enemiesOnField) {
    enemiesOnField[i].move(enemiesOnField[i].spd);
  }
}

function update() {
  unitsAttack();
  updateEnemies();
}

function animate() {
  update();

  if (draw() == 0) {
    window.requestAnimationFrame(animate);
  }
}

init();
