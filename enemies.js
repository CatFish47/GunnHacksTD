class SmallEnemy extends Enemy {
  constructor() {
    this.name = "SmallEnemy";
    this.lives = 1; // How many lives die if the enemy gets past
    this.hp = 75;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 5; // How fast the unit moves per tick
    this.moneyGained = 2;
  }
}
class MediumEnemy extends Enemy {
  constructor() {
    this.name = "MediumEnemy";
    this.lives = 2; // How many lives die if the enemy gets past
    this.hp = 160;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 10; // How fast the unit moves per tick
    this.moneyGained = 4;
  }
}
class LargeEnemy extends Enemy {
  constructor() {
    this.name = "LargeEnemy";
    this.lives = 4; // How many lives die if the enemy gets past
    this.hp = 270;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 15; // How fast the unit moves per tick
    this.moneyGained = 8;
  }
}
class Sprinter extends Enemy {
  constructor() {
    this.name = "Sprinter";
    this.lives = 1; // How many lives die if the enemy gets past
    this.hp = 100;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 20; // How fast the unit moves per tick
    this.moneyGained = 20;
  }
}
class Tank extends Enemy {
  constructor() {
    this.name = "Tank";
    this.lives = 4; // How many lives die if the enemy gets past
    this.hp = 500;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 5; // How fast the unit moves per tick
    this.moneyGained = 40;
  }
}
class AmmoredTank extends Enemy {
  constructor() {
    this.name = "AmmoredTank";
    this.lives = 4; // How many lives die if the enemy gets past
    this.hp = 800;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 3; // How fast the unit moves per tick
    this.moneyGained = 50;
  }
}
class Flyer extends Enemy {
  constructor() {
    this.name = "Flyer";
    this.lives = 2; // How many lives die if the enemy gets past
    this.hp = 250;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 10; // How fast the unit moves per tick
    this.moneyGained = 50;
  }
}
class TheUltimateBoss extends Enemy {
  constructor() {
    this.name = "TheUltimateBoss";
    this.lives = 20; // How many lives die if the enemy gets past
    this.hp = 1600;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 10; // How fast the unit moves per tick
    this.moneyGained = 200;
  }
}
