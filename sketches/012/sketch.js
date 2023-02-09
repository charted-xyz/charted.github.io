function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#f0f0f025");
  let margin = width / 10;
  let step = 2.5;
  let circleSpeed = 500;
  let circleSize = 25;
  for (let i = margin; i <= height - margin; i += step) {
    if (i >= height / 2) {
      stroke("#D11349");
    } else {
      stroke("#3E454F");
    }

    circle(
      map(sin((radians(frameCount) * i) / circleSpeed), -1, 1, margin, width - margin),
      i,
      circleSize * sin(i)
    );

    circle(
      map(sin((radians(-frameCount) * i) / circleSpeed), -1, 1, margin, width - margin),
      i,
      circleSize * sin(i)
    );
  }
}
