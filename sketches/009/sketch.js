function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#F0F0F020');
  strokeWeight(3);
  
  push();
  translate(width/2, height/2);
  rotate(frameCount * HALF_PI / 90)
  stroke('#D11349');
  line(-300, 0, 300, 0)
  pop()
  
  push();
  translate(width/2, height/2);
  rotate(frameCount * -HALF_PI / 90);
  stroke('#3E454F');
  line(-300, 0, 300, 0)
  pop()
  
  push();
  translate(width/2, height/2);
  rotate(frameCount * HALF_PI / 90)
  stroke('#D11349');
  line(0, -300, 0, 300)
  pop()
  
  push();
  translate(width/2, height/2);
  rotate(frameCount * -HALF_PI / 90)
  stroke('#3E454F');
  line(0, -300, 0, 300)
  pop()

}