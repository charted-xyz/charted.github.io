function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#F0F0F050");
  rectMode(CENTER);
  let n=50;
  let minSize=width/100;
  let maxSize=width/25;
  let rectSize;
  let margin=width/20;
  
  // first loop
  for(let i=margin; i<=width-margin; i+=width/n) {
    
    // second loop
  
      for(let j=margin; j<=height-margin; j+=height/n) {
        
        rectSize = map(dist(i, j, width/2, height/2),
                       0, width/2,
                       maxSize, minSize
                      );
        
        if(i<=width/2 && j<=height/2) {
           stroke("#D11349");
        } else if(i>width/2 && j>height/2) {
          stroke("#D11349");
        } else {
          stroke("#3E454F")
        }
        
        push();
        translate(i, j);
        
        rotate(frameCount*i/2000 - frameCount*j/2000);
        rect(0, 0, rectSize*2 * sin(i), rectSize/4 * sin(j));
        
        pop();
        
      }
    
  }    
  
}