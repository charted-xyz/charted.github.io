function setup() {
  pixelDensity(2);
  createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  noLoop();
  button = createButton("create new");
}

function draw() {
  background("#f0f0f0");
  //rectMode(CENTER);
  let elements = ["circles", "squares"];
  let colors = [
    "#67001f",
    "#b2182b",
    "#d6604d",
    "#f4a582",
    "#fddbc7",
    "#d1e5f0",
    "#92c5de",
    "#4393c3",
    "#2166ac",
    "#053061",
  ];
  let n = 15;
  let radius = min(windowWidth, windowHeight) / n;
  let margin = min(windowWidth, windowHeight) / 10;
  noStroke();
  button.position(
    windowWidth / 2 - button.width / 2,
    height - (margin / 2 + button.height / 2)
  );

  for (let i = margin; i <= width - margin; i += width / n) {
    for (let j = margin; j <= height - margin; j += height / n) {
      fill(random(colors));
      // choose random figure
      if (random(elements) == "squares") {
        rect(i, j, radius);
      } else {
        circle(i, j, radius);
      }
    }
  }
}

function mousePressed() {
  if (button.mousePressed()) {
    clear();
    redraw();
  }
}
