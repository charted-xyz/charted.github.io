let margin;
let step = 25;
let colors = [
  "#67001f",
  "#b2182b",
  "#d6604d",
  "#f4a582",
  "#fddbc7",
  "#f7f7f7",
  "#d1e5f0",
  "#92c5de",
  "#4393c3",
  "#2166ac",
  "#053061",
];
let strokes = [1, 3, 5, 7, 9, 11];

function setup() {
  createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  noLoop();
  button = createButton("create new");
}

function draw() {
  background("#f9f9f9");
  margin = min(windowWidth, windowHeight) / 10;
  button.position(
    windowWidth / 2 - button.width / 2,
    height - (margin / 2 + button.height / 2)
  );

  for (let i = margin; i <= width - margin; i += step) {
    stroke(random(colors));
    strokeWeight(random(strokes));
    line(i + random(-step, step), margin, i, height - margin);

    stroke(random(colors));
    strokeWeight(random(strokes) / random(1.5, 2));
    line(margin, i + random(-step / 2, step / 2), width - margin, i);
  }
}

function mousePressed() {
  if (button.mousePressed()) {
    clear();
    redraw();
  }
}
