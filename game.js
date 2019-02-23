// Canvas Variables
var $canvas = document.querySelector('canvas');
var context = $canvas.getContext("2d");
$canvas.width = 1200;
$canvas.height = 700;

function draw() {

}

function update() {

}

function animate() {
  update();

  if (draw() == 0) {
    window.requestAnimationFrame(animate);
  }
}
