function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
}

function draw() {
  background("#f0f0f0");
  fill("#00000005");
  //noFill();
  let margin = width / 10;

  translate(0, height / 2);
  stroke("#D11349");
  beginShape(TRIANGLE_STRIP);

  for (let i = margin; i <= width - margin; i += width / 100) {
    vertex(
      i + sin(frameCount / i) * width/50,
      (noise(i, frameCount / 500 - i) * height) / 2 - height / 2
    );
  }

  endShape();

  translate(0, height / 2);
  stroke("#3E454F");
  beginShape(TRIANGLE_STRIP);

  for (let i = margin; i <= width - margin; i += width / 100) {
    vertex(
      i + sin(frameCount / -i) * width/25,
      (noise(i, frameCount / 1000 - i) * height) / 2 - height / 2
    );
  }

  endShape();
}
