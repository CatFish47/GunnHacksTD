document.getElementById("board").addEventListener("mousemove", function(e) {
  var rect = $canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
})

document.getElementById("board").addEventListener("mousemove", function(e) {
  for (var row = 1; row < board.board.length - 1; row++) {
    for (var col = 1; col < board.board[row].length - 1; col++) {
      if (mouseX > boardTopLeft.x + (1 + 40 * (row - 1)) &&
          mouseX < boardTopLeft.x + (1 + 40 * (row)) &&
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
  for (var row = 0; row < board.board.length - 1; row++) {
    for (var col = 0; col < board.board[row].length - 1; col++) {
      if (mouseX > boardTopLeft.x + (1 + 40 * (row)) &&
          mouseX < boardTopLeft.x + (1 + 40 * (row + 1)) &&
          mouseY > boardTopLeft.y + (1 + 40 * (col - 1)) &&
          mouseY < boardTopLeft.y + (1 + 40 * (col)))
      {
        if (storedUnit == "") {
          console.log(row, col)
        } else if (storedUnit == "new Wall();") {
          board.board[row + 1][col].placeWall();
          recalculateRoute();
        } else if (board.board[row + 1][col].wall) {
          board.board[row + 1][col].placeUnit(eval(storedUnit + `${row + 1}, ${col});`));
          if (storedUnit = "Wall();") {
            money.player -= 50;
          }
          else if (storedUnit = "Gunner();") {
            money.player -=100;

          }
          else if (storedUnit = "Wizard();") {
            money.player -= 200;

          }
          else if (storedUnit = "Freezer();") {
                      money.player -= 300;
          }
          else if (storedUnit = "RingOfFire();"){
            money.player -= 290;

          }
          else if (storedUnit = "RingOfFire();"){
            money.player -= 600;

          }



        }
      }
    }
  }
})

document.addEventListener("click", function(e) {
  if (mouseX > 100 && mouseX < 175 && mouseY > 50 && mouseY < 125) {
    if (players.money>50){
          storedUnit = "new Wall();";
    }
  } else if (mouseX > 100 && mouseX < 175 && mouseY > 130 && mouseY < 205) {
    if (players.money>100){
          storedUnit = "new Gunner();";
    }  } else if (mouseX > 100 && mouseX < 175 && mouseY > 210 && mouseY < 285) {
      if (players.money>200){
            storedUnit = "new Wizard();";
      }  } else if (mouseX > 100 && mouseX < 175 && mouseY > 290 && mouseY < 365) {
        if (players.money>300){
              storedUnit = "new Freezer();";
        }  } else if (mouseX > 100 && mouseX < 175 && mouseY > 370 && mouseY < 445) {
          if (players.money>290){
                storedUnit = "new RingOfFire();";
          }  } else if (mouseX > 100 && mouseX < 175 && mouseY > 450 && mouseY < 525) {
            if (players.money>600){
                  storedUnit = "new MoralSupporter();";
            }  } else if (mouseX > boardTopLeft.x && mouseX < boardTopLeft.x + 600 &&
              mouseY > boardTopLeft.y && mouseY < boardTopLeft.y + 600) {
  } else {
    storedUnit = "";
  }
})
// TODO: Add border around menu to indicate selection

document.addEventListener("click", function(e) {
  if (mouseX > startButtonTopLeft.x && mouseX < startButtonBottomRight.x &&
      mouseY > startButtonTopLeft.y && mouseY < startButtonBottomRight.y) {
        startNextWave();
      }
})
