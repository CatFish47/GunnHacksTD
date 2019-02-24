class Wall {
  constructor(x, y) {
    this.name = "Wall";
    this.image = new Image();
    this.image.src = "images/WALl.png";
    this.cost = 50;
  }
}

class Unit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  scanEnemies(range) {
    var enemies = [];

    for (var i = -range; i <= range; i++) {
      for (var j = -range; j <= range; j++) {
        if (this.x + i >= 0 && this.x + i < board.board.length &&
            this.y + j >= 0 && this.y + j < board.board[0].length) {
          enemies = enemies.concat(this.checkEnemies(board.board[this.x + i][this.y + j]));
        }
      }
    }

    return enemies.reverse();
  }

  checkEnemies(tile) {
    var targets = [];

    for (var i in enemiesOnField) {
      if (enemiesOnField[i].tileX == tile.x && enemiesOnField[i].tileY == tile.y) {
        targets.push(enemiesOnField[i]);
      }
    }

    return targets;
  }
}

class Gunner extends Unit {
  constructor(x, y) {
    super(x, y);
    this.name = "Gunner";
    this.range = 2;
    this.dmg = 6;
    this.delay = 0.2; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "images/Gunner.png";
    this.cost = 100;

    var t = this;

    this.interval = setInterval(function() {
      t.attack();
    }, this.delay * 1000);
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack
    var inRange = this.scanEnemies(this.range);

    if (inRange.length > 0) {
      inRange[0].hp -= this.dmg;
      this.image.src = "images/GunnerShooting.png";
    } else {
      this.image.src = "images/Gunner.png";
    }
  }
}

class RingOfFire extends Unit {
  constructor(x, y) {
    super(x, y);
    this.name = "Ring of Fire";
    this.range = 1;
    this.dmg = 30;
    this.delay = 1; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "images/FireIn.png";
    this.cost = 290;

    var t = this;

    this.interval = setInterval(function() {
      t.attack();
    }, this.delay * 1000);
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack
    var inRange = this.scanEnemies(this.range);

    if (inRange.length > 0) {
      for (var i in inRange) {
        inRange[i].hp -= this.dmg;
      }
      this.image.src = "images/FireOut.png";
    } else {
      this.image.src = "images/FireIn.png";
    }
  }
}

class Freezer extends Unit {
  constructor(x, y) {
    super(x, y);
    this.name = "Freezer";
    this.range = 1;
    this.dmg = 0;
    this.delay = 3; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "images/Freeze.png";
    this.cost = 300;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}

class MoralSupporter extends Unit {
  constructor(x, y) {
    super(x, y);
    this.name = "Moral Supporter";
    this.range = 3;
    this.dmg = 0;
    this.delay = 0; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "images/SELF.png";
    this.cost = 600;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack
    var inRange = this.scanEnemies(this.range);

    if (inRange.length > 0) {
      inRange[0].hp -= this.dmg;
    }
  }
}

class Wizard extends Unit {
  constructor(x, y) {
    super(x, y);
    this.name = "Wizard";
    this.range = 3;
    this.dmg = 15;
    this.delay = 4; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "/images/Wisard.png";
    this.cost = 200;

    var t = this;

    this.interval = setInterval(function() {
      t.attack();
    }, this.delay * 1000);
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack
    var inRange = this.scanEnemies(this.range);

    if (inRange.length > 0) {
      for (var i in inRange) {
        inRange[i].hp -= this.dmg;
      }
    }
  }
}
