class Unit {
  constructor() {}

  someBasicFunctionAllUnitsDo() {

  }
}

class Rifle extends Unit {
  constructor() {
    this.name = "Rifle";
    this.dmg = 15;
    this.delay = 1; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 50;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}

class Gunner extends Unit {
  constructor() {
    this.name = "Gunner";
    this.dmg = 2;
    this.delay = 0.2; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 100;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}

class FieldEnginner extends Unit {
  constructor() {
    this.name = "FieldEnginner";
    this.dmg = 8;
    this.delay = 0.5; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 500;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}
class RingOfFire extends Unit {
  constructor() {
    this.name = "RingOfFire";
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
    this.name = "Freezer";
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
    this.name = "MoralSupporter";
    this.dmg = 0;
    this.delay = 0; // Amt of seconds it takes for the unit to attack again
    this.image = new Image();
    this.image.src = "http://gunnhacks.com/img/logo.png";
    this.cost = 600;
  }

  attack() { // This is here and not in the Unit class because each tower has a special attack

  }
}
