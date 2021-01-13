function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#F0F0F020');
  noFill();
  strokeWeight(10);
  stroke('#3E454F');
  let n = 16;
  let s = 2;
  let size = 30 * n;
  let increment = 30;
  for (let i = 1; i < n; i++) {
    
  if(i%4 == 0) {
     
    stroke('#D11349');
     
     }
  
  push();
  translate(width/2, height/2);
  rotate(frameCount * PI * i/ 360);
  
  arc(0, 0, size, size, -HALF_PI-QUARTER_PI/1.5, HALF_PI + QUARTER_PI/1.5)
  
  size-=increment  
  pop();
  
  }
}