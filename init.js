// Canvas Variables
var $canvas = document.querySelector('canvas');
var context = $canvas.getContext("2d");
$canvas.width = 1200;
$canvas.height = 700;

// Init Variables
var board = new Board(17, 17); // a 15x15 grid
var player = new Player(100, 100); // $, <3
var startButtonTopLeft = {
  x: 990,
  y: 617
};
var startButtonBottomRight = {
  x: 1176,
  y: 681
};
var speedUpTopLeft = {
  x: 867,
  y: 618
};
var speedUpBottomRight = {
  x: 976,
  y: 676
};
var boardTopLeft = {
  x: 285,
  y: 20
}

// Mouse Variables
var mouseX = 0;
var mouseY = 0;

// Game
var storedUnit = "";
var wave = -1;
var enemiesOnField = [];
var route = [];
var waves = [
  //1
  [new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy()],
  //2
  [new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy()],
  //3
  [new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //4
  [new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //5
  [new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy()],
  //6
  [new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy()],
  //7
  [new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //8
  [new Sprinter,new Sprinter, new Sprinter, new Sprinter, new Sprinter, new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy()],
  //9
  [new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy()],
  //10
  [new Sprinter, new Sprinter, new Sprinter, new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy()],
  //11
  [new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //12
  [new Tank, new Tank, new Tank, new Tank, new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //13
  [new Flyer, new Flyer, new Flyer, new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy()],
  //14
  [new Tank, new AmmoredTank, new AmmoredTank, new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //15\
  [new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //16
  [new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Tank, new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //17
  [new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new SmallEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(),new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy(), new MediumEnemy()],
  //18
  [new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy()],
  //19
  [new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new Tank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new LargeEnemy(), new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Sprinter, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer, new Flyer],
  //20
  [new TheUltimateBoss, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank, new AmmoredTank]
]
