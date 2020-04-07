let rotating = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  background('#F0F0F0');
  stroke('#3E454F');
  let length = 250;
  strokeWeight(0.5);
  noFill();
  for (let j = 0; j < 150; j++) {

    push();
    translate(width / 2, height / 2);
    rotate(frameCount * HALF_PI * j / 720);
    beginShape();

    for (i = 0; i < length; i++) {
      strokeWeight(i * j / 10000)
      let x = i + j / 2;
      let y = sin(i / 30 + j) * 33;
      vertex(x, y);

    }
    endShape();
    pop();

  }
}

function mousePressed() {
  if (rotating == true) {
    noLoop();
    rotating = false;

  } else {

    loop();
    rotating = true;
  }
}

function keyPressed() {
  if (keyCode === 83) {
    saveFrames(str(frameCount), 'png', 1, 1);
  }
  return false
}