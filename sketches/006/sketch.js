function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  let n = 45;
  let size = n*8;
  let increment = 0.95;
  let speed = 720*7;
  
  background('#F0F1F140');
  
  fill('#F0F1F1');
  //noFill();
  stroke('#3E454F');
  strokeWeight(2);
  rectMode(CENTER);
  
  for(let i = 1; i < n+1; i++) {
    
  if(i%3==0) {
  
    speed*=-1
  
  }
  
  push();
  translate(width/2, height/2);
  rotate(frameCount*PI/speed*i);
  rect(0, 0, size, size);
  pop();
    
  size*=increment;
  
  
  }
  
  
  
}