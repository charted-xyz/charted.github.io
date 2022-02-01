let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
  noLoop();
  button = createButton("create new");

  drawingContext.shadowOffsetX = 1;
  drawingContext.shadowOffsetY = -1;
  drawingContext.shadowBlur = 3;
  drawingContext.shadowColor = "#08121Bk";
}

function draw() {
  // define graphic parameters
  background("#0D1F30");
  stroke("#DEBA64");
  fill("#DEBA64");
  const margin = 100;
  const size = 8;
  const radius = Math.min((width - margin * 2) / 2, (height - margin * 2) / 2);
  const minDist = 10;
  button.position(
    windowWidth / 2 - button.width / 2,
    windowHeight / 2 + radius + radius / 10
  );

  // generate array of random numbers

  let data = makeData(1000, margin, width - margin, margin, height - margin);

  // filter array so it only contains points that fit in the circle

  let dataShaped = data.filter(
    (point) => abs(dist(width / 2, height / 2, point.x, point.y)) < radius
  );

  // connect dots

  for (let i = 0; i < dataShaped.length; i++) {
    let firstPoint = dataShaped[i];

    let restOfTheData = dataShaped.slice();

    // find closes point to the previously picked random point

    restOfTheData.sort(function (a, b) {
      return (
        abs(dist(a.x, a.y, firstPoint.x, firstPoint.y)) -
        abs(dist(b.x, b.y, firstPoint.x, firstPoint.y))
      );
    });

    let secondPoint = restOfTheData[1];

    // connect two points with a line

    if (
      abs(dist(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y)) >
      minDist
    ) {
      strokeWeight(
        map(
          dist(secondPoint.x, secondPoint.y, width / 2, height / 2),
          0,
          radius,
          size / 2,
          size / 8
        )
      );

      line(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y);
    }
  }

  // draw points

  for (let i = 0; i < dataShaped.length; i++) {
    circle(
      dataShaped[i].x,
      dataShaped[i].y,
      map(
        dist(dataShaped[i].x, dataShaped[i].y, width / 2, height / 2),
        0,
        radius,
        size,
        size / 4
      )
    );
  }
}

// generate array of random numbers

function makeData(length, startWidth, endWidth, startHeight, endHeight) {
  let array = [];

  for (i = 0; i < length; i++) {
    array.push(
      createVector(random(startWidth, endWidth), random(startHeight, endHeight))
    );
  }

  return array;
}

function mousePressed() {
  if (button.mousePressed()) {
    clear();
    redraw();
  }
}
