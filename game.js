function draw() {
  drawGrid();
}

function update() {

}

function animate() {
  update();

  if (draw() == 0) {
    window.requestAnimationFrame(animate);
  }
}
