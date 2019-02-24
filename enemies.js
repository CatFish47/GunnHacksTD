class Enemy {
  constructor() {
    this.x = boardTopLeft.x + 300;
    this.y = -50;
    this.tileX = 8;
    this.tileY = 0;
  }

  move(spd) {
    var d = 8;

    console.log(route);

    for (var i = 0; i < route.length; i++) {

      if (this.tileX == route[i].x && this.tileY == route[i].y) {
        if (route[i + 1].x > this.tileX) {
          this.x += spd/d;
        } else if (route[i + 1].x < this.tileX) {
          this.x -= spd/d;
        } else if (route[i + 1].y > this.tileY) {
          this.y += spd/d;
        } else if (route[i + 1].y < this.tileY) {
          this.y -= spd/d;
        }
      }


    }
  }

  changeTiles(tile) {
    this.tileX = tile.x;
    this.tileY = tile.y;
  }
}

class SmallEnemy extends Enemy {
  constructor() {
    super();
    this.name = "SmallEnemy";
    this.lives = 1; // How many lives die if the enemy gets past
    this.hp = 75;
    this.image = new Image();
    this.image.src = "/images/SmallMan.png";
    this.spd = 5; // How fast the unit moves per tick
    this.moneyGained = 2;
  }
}
class MediumEnemy extends Enemy {
  constructor() {
    super();
    this.name = "MediumEnemy";
    this.lives = 2; // How many lives die if the enemy gets past
    this.hp = 160;
    this.image = new Image();
    this.image.src = "/images/MediumMan.png";
    this.spd = 10; // How fast the unit moves per tick
    this.moneyGained = 4;
  }
}
class LargeEnemy extends Enemy {
  constructor() {
    super();
    this.name = "LargeEnemy";
    this.lives = 4; // How many lives die if the enemy gets past
    this.hp = 270;
    this.image = new Image();
    this.image.src = "/images/watermelon.png";
    this.spd = 15; // How fast the unit moves per tick
    this.moneyGained = 8;
  }
}
class Sprinter extends Enemy {
  constructor() {
    super();
    this.name = "Sprinter";
    this.lives = 1; // How many lives die if the enemy gets past
    this.hp = 100;
    this.image = new Image();
    this.image.src = "/images/Rabbir.png";
    this.spd = 20; // How fast the unit moves per tick
    this.moneyGained = 20;
  }
}
class Tank extends Enemy {
  constructor() {
    super();
    this.name = "Tank";
    this.lives = 4; // How many lives die if the enemy gets past
    this.hp = 500;
    this.image = new Image();
    this.image.src = "/images/Tank.png";
    this.spd = 5; // How fast the unit moves per tick
    this.moneyGained = 40;
  }
}
class AmmoredTank extends Enemy {
  constructor() {
    super();
    this.name = "AmmoredTank";
    this.lives = 4; // How many lives die if the enemy gets past
    this.hp = 800;
    this.image = new Image();
    this.image.src = "/images/AmmoredTank.png";
    this.spd = 3; // How fast the unit moves per tick
    this.moneyGained = 50;
  }
}
class Flyer extends Enemy {
  constructor() {
    super();
    this.name = "Flyer";
    this.lives = 2; // How many lives die if the enemy gets past
    this.hp = 250;
    this.image = new Image();
    this.image.src = "/images/Spin.png";
    this.spd = 10; // How fast the unit moves per tick
    this.moneyGained = 50;
  }
}
class TheUltimateBoss extends Enemy {
  constructor() {
    super();
    this.name = "TheUltimateBoss";
    this.lives = 20; // How many lives die if the enemy gets past
    this.hp = 1600;
    this.image = new Image();
    this.image.src = "/images/RatKing.png";
    this.spd = 10; // How fast the unit moves per tick
    this.moneyGained = 200;
  }
}
