class Unit {
  constructor() {}

  someBasicFunctionAllUnitsDo() {

  }
}

class SpecificUnitExample extends Unit {
  constructor() {
    this.name = "Some unit's name";
    this.dmg = 10;
    this.delay = 100; // Amt of ticks it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 100;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}

//----------------------------------------------------------------

class Enemy {
  constructor() {}

  move() {
    // Move the enemy across the board
  }
}

class SpecificEnemyExample extends Enemy {
  constructor() {
    this.name = "Some enemy's name";
    this.lives = 1; // How many lives die if the enemy gets past
    this.hp = 50;
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.spd = 10; // How fast the unit moves per tick
  }
}
