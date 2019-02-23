class Wall {
  constructor() {
    this.name = "Wall";
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 50;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}

class Unit {
  constructor() {}

  someBasicFunctionAllUnitsDo() {

  }
}

class Gunner extends Unit {
  constructor() {
    super();
    this.name = "Gunner";
    this.range = 4;

    this.dmg = 2;
    this.delay = 0.2; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 100;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}

class RingOfFire extends Unit {
  constructor() {
    super();
    this.name = "Ring of Fire";
    this.range = 3;
    this.dmg = 10;
    this.delay = 1; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 290;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}

class Freezer extends Unit {
  constructor() {
    super();
    this.name = "Freezer";
    this.range = 2;
    this.dmg = 0;
    this.delay = 3; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 300;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}
class MoralSupporter extends Unit {
  constructor() {
    super();
    this.name = "Moral Supporter";
    this.range = 5;
    this.dmg = 0;
    this.delay = 0; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 600;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}
class Wizard extends Unit {
  constructor() {
    super();
    this.name = "Wizard";
    this.range = 5;
    this.dmg = 0;
    this.delay = 0; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 200;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}
