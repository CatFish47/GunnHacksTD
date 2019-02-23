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
var wave = 0;
var route = [];
